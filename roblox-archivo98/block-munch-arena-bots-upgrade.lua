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
local RunService = game:GetService("RunService")

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
local MAX_MASS = 45
local MIN_FIRE_MASS = 2
local FOOD_TARGET = 55
local BOT_COUNT = 6
local BOT_FIRE_RANGE = 45
local BOT_EAT_RANGE = 4
local BOT_SPEED = 18

local playerMass = {}
local botMass = {}
local lastBotShot = {}

local function getScale(mass)
	return 0.8 + math.clamp(mass, 1, MAX_MASS) * 0.045
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
	humanoid.WalkSpeed = math.max(10, 18 - scale * 2)
end

local function updatePlayerStats(player)
	local mass = playerMass[player] or START_MASS
	player:SetAttribute("Mass", mass)
	local leaderstats = player:FindFirstChild("leaderstats")
	if leaderstats and leaderstats:FindFirstChild("Mass") then
		leaderstats.Mass.Value = mass
	end
	applyPlayerScale(player)
end

local function addPlayerMass(player, amount)
	playerMass[player] = math.clamp((playerMass[player] or START_MASS) + amount, 0, MAX_MASS)
	updatePlayerStats(player)
end

local function randomArenaPosition()
	return Vector3.new(math.random(-76, 76), 2.2, math.random(-76, 76))
end

local function makeFood(position, value)
	local cube = Instance.new("Part")
	cube.Name = "FoodCube"
	cube.Size = Vector3.new(2.5, 2.5, 2.5)
	cube.Position = position
	cube.Anchored = true
	cube.CanCollide = false
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

task.spawn(function()
	while true do
		while #foodFolder:GetChildren() < FOOD_TARGET do
			makeFood(randomArenaPosition(), 1)
		end
		task.wait(1)
	end
end)

local function dropLoot(position, amount)
	for i = 1, math.clamp(amount, 4, 20) do
		makeFood(position + Vector3.new(math.random(-8, 8), 2.2, math.random(-8, 8)), 1)
	end
end

local function eliminatePlayer(player)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if root then
		dropLoot(root.Position, playerMass[player] or START_MASS)
	end
	playerMass[player] = START_MASS
	updatePlayerStats(player)
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
	botMass[bot] = math.clamp(mass, 0, MAX_MASS)
	local scale = getScale(botMass[bot])
	bot.Size = Vector3.new(4, 4, 4) * scale
	bot:SetAttribute("Mass", botMass[bot])
end

local function damageBot(bot, amount)
	if not bot or not bot.Parent then
		return
	end
	setBotMass(bot, (botMass[bot] or START_MASS) - amount)
	if (botMass[bot] or 0) <= 0 then
		dropLoot(bot.Position, START_MASS + 4)
		bot:Destroy()
	end
end

local function fireProjectile(ownerKind, owner, origin, targetPosition)
	local direction = targetPosition - origin
	if direction.Magnitude < 1 then
		return
	end
	direction = direction.Unit

	local projectile = Instance.new("Part")
	projectile.Name = "MassShot"
	projectile.Shape = Enum.PartType.Ball
	projectile.Size = Vector3.new(2.2, 2.2, 2.2)
	projectile.Position = origin + direction * 5
	projectile.Color = ownerKind == "Bot" and Color3.fromRGB(255, 120, 70) or Color3.fromRGB(70, 210, 255)
	projectile.Material = Enum.Material.Neon
	projectile.CanCollide = false
	projectile:SetAttribute("OwnerKind", ownerKind)
	if ownerKind == "Player" then
		projectile:SetAttribute("ShooterUserId", owner.UserId)
	else
		projectile:SetAttribute("ShooterBot", owner.Name)
	end
	projectile.Parent = projectileFolder

	local velocity = Instance.new("LinearVelocity")
	local attachment = Instance.new("Attachment")
	attachment.Parent = projectile
	velocity.Attachment0 = attachment
	velocity.MaxForce = math.huge
	velocity.VectorVelocity = direction * 95
	velocity.Parent = projectile

	local hitOnce = false
	projectile.Touched:Connect(function(hit)
		if hitOnce then
			return
		end

		local targetPlayer = Players:GetPlayerFromCharacter(hit.Parent)
		local targetBot = hit.Parent == botsFolder and hit or (hit:IsDescendantOf(botsFolder) and hit)

		if ownerKind == "Player" and targetPlayer and targetPlayer == owner then
			return
		end
		if ownerKind == "Bot" and targetBot and targetBot == owner then
			return
		end

		if targetPlayer then
			hitOnce = true
			damagePlayer(targetPlayer, 1)
			projectile:Destroy()
		elseif targetBot and targetBot:IsA("BasePart") then
			hitOnce = true
			damageBot(targetBot, 1)
			projectile:Destroy()
		elseif hit.CanCollide then
			hitOnce = true
			projectile:Destroy()
		end
	end)

	Debris:AddItem(projectile, 3)
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
	bot.Color = Color3.fromRGB(235, 80, 80)
	bot.Material = Enum.Material.Neon
	bot.Parent = botsFolder
	setBotMass(bot, START_MASS + math.random(0, 6))
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

task.spawn(function()
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
						bot.Position += direction.Unit * BOT_SPEED * 0.15
					else
						setBotMass(bot, (botMass[bot] or START_MASS) + (food:GetAttribute("MassValue") or 1))
						food:Destroy()
					end
				end

				local target, targetDistance = nearestPlayer(bot.Position)
				local canShoot = target and targetDistance < BOT_FIRE_RANGE and (botMass[bot] or START_MASS) >= MIN_FIRE_MASS
				local now = os.clock()
				if canShoot and (not lastBotShot[bot] or now - lastBotShot[bot] > 1.6) then
					local root = target.Character and target.Character:FindFirstChild("HumanoidRootPart")
					if root then
						lastBotShot[bot] = now
						setBotMass(bot, (botMass[bot] or START_MASS) - 1)
						fireProjectile("Bot", bot, bot.Position, root.Position)
					end
				end
			end
		end

		task.wait(0.15)
	end
end)

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
		updatePlayerStats(player)
	end)

	updatePlayerStats(player)
end)

Players.PlayerRemoving:Connect(function(player)
	playerMass[player] = nil
end)

fireEvent.OnServerEvent:Connect(function(player, targetPosition)
	if typeof(targetPosition) == "Vector3" then
		playerFire(player, targetPosition)
	end
end)
]]

server.Parent = ServerScriptService

print("Bots agregados. Presiona Detener y despues Probar para reiniciar con bots.")
