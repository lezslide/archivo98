local ServerScriptService = game:GetService("ServerScriptService")

local old = ServerScriptService:FindFirstChild("BlockMunchServer")
if old then
	old:Destroy()
end

local server = Instance.new("Script")
server.Name = "BlockMunchServer"
server.Source = [[
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Debris = game:GetService("Debris")

local fireEvent = ReplicatedStorage:FindFirstChild("BlockMunchFire")
if not fireEvent then
	fireEvent = Instance.new("RemoteEvent")
	fireEvent.Name = "BlockMunchFire"
	fireEvent.Parent = ReplicatedStorage
end

local foodFolder = workspace:FindFirstChild("FoodCubes") or Instance.new("Folder")
foodFolder.Name = "FoodCubes"
foodFolder.Parent = workspace

local projectileFolder = workspace:FindFirstChild("Projectiles") or Instance.new("Folder")
projectileFolder.Name = "Projectiles"
projectileFolder.Parent = workspace

local botsFolder = workspace:FindFirstChild("BlockMunchBots") or Instance.new("Folder")
botsFolder.Name = "BlockMunchBots"
botsFolder.Parent = workspace

local START_MASS = 5
local MIN_FIRE_MASS = 2
local FOOD_TARGET = 75
local BOT_COUNT = 8
local BOT_FIRE_RANGE = 55
local BOT_EAT_RANGE = 4
local BOT_SPEED = 20

local playerMass = {}
local botMass = {}
local lastBotShot = {}

local function getScale(mass)
	-- Masa ilimitada, escala progresiva para que no rompa el personaje demasiado rapido.
	return 0.85 + math.sqrt(math.max(mass, 1)) * 0.18
end

local function applyPlayerScale(player)
	local character = player.Character
	local humanoid = character and character:FindFirstChildOfClass("Humanoid")
	if not humanoid then
		return
	end

	local scale = getScale(playerMass[player] or START_MASS)
	for _, name in ipairs({"BodyDepthScale", "BodyHeightScale", "BodyWidthScale", "HeadScale"}) do
		local value = humanoid:FindFirstChild(name)
		if value then
			value.Value = scale
		end
	end

	humanoid.WalkSpeed = math.max(8, 19 - scale * 1.15)
end

local function updatePlayer(player)
	local mass = playerMass[player] or START_MASS
	player:SetAttribute("Mass", mass)

	local leaderstats = player:FindFirstChild("leaderstats")
	if leaderstats and leaderstats:FindFirstChild("Mass") then
		leaderstats.Mass.Value = mass
	end

	applyPlayerScale(player)
end

local function addPlayerMass(player, amount)
	playerMass[player] = math.max(0, (playerMass[player] or START_MASS) + amount)
	updatePlayer(player)
end

local function randomArenaPosition()
	return Vector3.new(math.random(-76, 76), 2.5, math.random(-76, 76))
end

local function makeFood(position, value)
	local cube = Instance.new("Part")
	cube.Name = "FoodCube"
	cube.Size = Vector3.new(2.5, 2.5, 2.5)
	cube.Position = position
	cube.Anchored = true
	cube.CanCollide = false
	cube.CanTouch = true
	cube.Color = Color3.fromHSV(math.random(), 0.75, 1)
	cube.Material = Enum.Material.Neon
	cube:SetAttribute("MassValue", value or 1)
	cube.Parent = foodFolder

	cube.Touched:Connect(function(hit)
		local player = Players:GetPlayerFromCharacter(hit.Parent)
		if player then
			addPlayerMass(player, cube:GetAttribute("MassValue") or 1)
			cube:Destroy()
		end
	end)
end

local function keepFoodAlive()
	while true do
		while #foodFolder:GetChildren() < FOOD_TARGET do
			makeFood(randomArenaPosition(), 1)
		end
		task.wait(0.75)
	end
end

task.spawn(keepFoodAlive)

local function dropLoot(position, amount)
	for _ = 1, math.clamp(amount, 6, 35) do
		makeFood(position + Vector3.new(math.random(-10, 10), 2.5, math.random(-10, 10)), 1)
	end
end

local function eliminatePlayer(player)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if root then
		dropLoot(root.Position, playerMass[player] or START_MASS)
	end

	playerMass[player] = START_MASS
	updatePlayer(player)

	local humanoid = character and character:FindFirstChildOfClass("Humanoid")
	if humanoid then
		humanoid.Health = 0
	end
end

local function damagePlayer(player, amount)
	addPlayerMass(player, -amount)
	if (playerMass[player] or 0) <= 0 then
		eliminatePlayer(player)
	end
end

local function setBotMass(bot, mass)
	if not bot or not bot.Parent then
		return
	end

	botMass[bot] = math.max(0, mass)
	local scale = getScale(botMass[bot])
	bot.Size = Vector3.new(4, 4, 4) * scale
	bot:SetAttribute("Mass", botMass[bot])
end

local function eliminateBot(bot)
	if not bot or not bot.Parent then
		return
	end

	dropLoot(bot.Position, botMass[bot] or START_MASS)
	botMass[bot] = nil
	lastBotShot[bot] = nil
	bot:Destroy()
end

local function damageBot(bot, amount)
	if not bot or not bot.Parent then
		return
	end

	setBotMass(bot, (botMass[bot] or START_MASS) - amount)
	if (botMass[bot] or 0) <= 0 then
		eliminateBot(bot)
	end
end

local function getBotFromHit(hit)
	if hit and hit:IsA("BasePart") and hit:IsDescendantOf(botsFolder) then
		return hit
	end
	return nil
end

local function fireProjectile(ownerKind, owner, origin, targetPosition)
	local flatTarget = Vector3.new(targetPosition.X, origin.Y, targetPosition.Z)
	local direction = flatTarget - origin
	if direction.Magnitude < 1 then
		return
	end
	direction = direction.Unit

	local projectile = Instance.new("Part")
	projectile.Name = "MassShot"
	projectile.Shape = Enum.PartType.Ball
	projectile.Size = Vector3.new(2.4, 2.4, 2.4)
	projectile.Position = origin + Vector3.new(0, 1.2, 0) + direction * 6
	projectile.Color = ownerKind == "Bot" and Color3.fromRGB(255, 115, 60) or Color3.fromRGB(70, 220, 255)
	projectile.Material = Enum.Material.Neon
	projectile.CanCollide = false
	projectile.CanTouch = true
	projectile:SetAttribute("OwnerKind", ownerKind)
	projectile.Parent = projectileFolder

	local attachment = Instance.new("Attachment")
	attachment.Parent = projectile

	local velocity = Instance.new("LinearVelocity")
	velocity.Attachment0 = attachment
	velocity.MaxForce = math.huge
	velocity.VectorVelocity = direction * 120
	velocity.Parent = projectile

	local hitOnce = false
	projectile.Touched:Connect(function(hit)
		if hitOnce or not projectile.Parent then
			return
		end

		if hit:IsDescendantOf(projectileFolder) or hit:IsDescendantOf(foodFolder) then
			return
		end

		local targetPlayer = Players:GetPlayerFromCharacter(hit.Parent)
		local targetBot = getBotFromHit(hit)

		if ownerKind == "Player" and targetPlayer == owner then
			return
		end
		if ownerKind == "Bot" and targetBot == owner then
			return
		end

		if targetPlayer then
			hitOnce = true
			damagePlayer(targetPlayer, 1)
			projectile:Destroy()
			return
		end

		if targetBot then
			hitOnce = true
			damageBot(targetBot, 1)
			projectile:Destroy()
			return
		end

		local isArenaWall = hit.Name:find("Wall") ~= nil
		if isArenaWall then
			hitOnce = true
			projectile:Destroy()
		end
	end)

	Debris:AddItem(projectile, 4)
end

local function playerFire(player, targetPosition)
	local mass = playerMass[player] or START_MASS
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root or mass < MIN_FIRE_MASS then
		return
	end

	addPlayerMass(player, -1)
	fireProjectile("Player", player, root.Position, targetPosition)
end

local function makeBot(index)
	local bot = Instance.new("Part")
	bot.Name = "Bot_" .. index
	bot.Shape = Enum.PartType.Ball
	bot.Position = randomArenaPosition()
	bot.Anchored = true
	bot.CanCollide = false
	bot.CanTouch = true
	bot.Color = Color3.fromRGB(235, 75, 75)
	bot.Material = Enum.Material.Neon
	bot.Parent = botsFolder
	setBotMass(bot, START_MASS + math.random(0, 3))
	return bot
end

local function nearestFood(position)
	local best
	local bestDistance = math.huge
	for _, food in ipairs(foodFolder:GetChildren()) do
		if food:IsA("BasePart") then
			local distance = (food.Position - position).Magnitude
			if distance < bestDistance then
				best = food
				bestDistance = distance
			end
		end
	end
	return best, bestDistance
end

local function nearestPlayer(position)
	local best
	local bestDistance = math.huge
	for _, player in ipairs(Players:GetPlayers()) do
		local root = player.Character and player.Character:FindFirstChild("HumanoidRootPart")
		if root then
			local distance = (root.Position - position).Magnitude
			if distance < bestDistance then
				best = player
				bestDistance = distance
			end
		end
	end
	return best, bestDistance
end

local function keepBotsAlive()
	for i = 1, BOT_COUNT do
		makeBot(i)
	end

	while true do
		while #botsFolder:GetChildren() < BOT_COUNT do
			makeBot(math.random(100, 999))
		end

		for _, bot in ipairs(botsFolder:GetChildren()) do
			if bot:IsA("BasePart") then
				local food, foodDistance = nearestFood(bot.Position)
				if food then
					local direction = food.Position - bot.Position
					if direction.Magnitude > BOT_EAT_RANGE then
						bot.Position += direction.Unit * BOT_SPEED * 0.12
					else
						setBotMass(bot, (botMass[bot] or START_MASS) + (food:GetAttribute("MassValue") or 1))
						food:Destroy()
					end
				end

				local target, targetDistance = nearestPlayer(bot.Position)
				local now = os.clock()
				if target and targetDistance < BOT_FIRE_RANGE and (botMass[bot] or START_MASS) >= MIN_FIRE_MASS and (not lastBotShot[bot] or now - lastBotShot[bot] > 1.25) then
					local root = target.Character and target.Character:FindFirstChild("HumanoidRootPart")
					if root then
						lastBotShot[bot] = now
						setBotMass(bot, (botMass[bot] or START_MASS) - 1)
						fireProjectile("Bot", bot, bot.Position, root.Position)
					end
				end
			end
		end

		task.wait(0.12)
	end
end

task.spawn(keepBotsAlive)

Players.PlayerAdded:Connect(function(player)
	playerMass[player] = START_MASS

	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player

	local massValue = Instance.new("IntValue")
	massValue.Name = "Mass"
	massValue.Value = START_MASS
	massValue.Parent = leaderstats

	player.CharacterAdded:Connect(function()
		task.wait(0.4)
		updatePlayer(player)
	end)

	updatePlayer(player)
end)

Players.PlayerRemoving:Connect(function(player)
	playerMass[player] = nil
end)

for _, player in ipairs(Players:GetPlayers()) do
	if not playerMass[player] then
		playerMass[player] = START_MASS
		updatePlayer(player)
	end
end

fireEvent.OnServerEvent:Connect(function(player, targetPosition)
	if typeof(targetPosition) == "Vector3" then
		playerFire(player, targetPosition)
	end
end)

print("Block Munch: masa ilimitada y combate corregido.")
]]

server.Parent = ServerScriptService

print("Upgrade aplicado: crecimiento ilimitado y disparos corregidos. Detene y volve a Probar.")
