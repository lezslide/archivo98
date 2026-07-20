local ServerScriptService = game:GetService("ServerScriptService")

local old = ServerScriptService:FindFirstChild("BlockMunchStompUpgrade")
if old then
	old:Destroy()
end

local scriptObject = Instance.new("Script")
scriptObject.Name = "BlockMunchStompUpgrade"
scriptObject.Source = [[
local Players = game:GetService("Players")

local botsFolder = workspace:WaitForChild("BlockMunchBots")
local foodFolder = workspace:WaitForChild("FoodCubes")

local STOMP_RATIO = 1.45
local STOMP_HEIGHT = 4
local CHECK_INTERVAL = 0.12

local function getPlayerMass(player)
	return player:GetAttribute("Mass") or 5
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
			local current = player:GetAttribute("Mass") or 5
			player:SetAttribute("Mass", current + (cube:GetAttribute("MassValue") or 1))
			local stats = player:FindFirstChild("leaderstats")
			local mass = stats and stats:FindFirstChild("Mass")
			if mass then
				mass.Value = player:GetAttribute("Mass")
			end
			cube:Destroy()
		end
	end)
end

local function dropLoot(position, amount)
	for _ = 1, math.clamp(amount, 5, 30) do
		makeFood(position + Vector3.new(math.random(-9, 9), 2.5, math.random(-9, 9)), 1)
	end
end

local function isAbove(attackerRoot, targetPosition)
	local horizontal = Vector3.new(attackerRoot.Position.X - targetPosition.X, 0, attackerRoot.Position.Z - targetPosition.Z).Magnitude
	local vertical = attackerRoot.Position.Y - targetPosition.Y
	return horizontal < 7 and vertical > STOMP_HEIGHT
end

local function stompBot(player, bot)
	local playerMass = getPlayerMass(player)
	local botMass = bot:GetAttribute("Mass") or 5
	if playerMass < botMass * STOMP_RATIO then
		return
	end

	dropLoot(bot.Position, botMass)
	player:SetAttribute("Mass", playerMass + math.max(1, math.floor(botMass / 2)))
	local stats = player:FindFirstChild("leaderstats")
	local mass = stats and stats:FindFirstChild("Mass")
	if mass then
		mass.Value = player:GetAttribute("Mass")
	end
	bot:Destroy()
end

local function stompPlayer(attacker, victim)
	if attacker == victim then
		return
	end

	local attackerMass = getPlayerMass(attacker)
	local victimMass = getPlayerMass(victim)
	if attackerMass < victimMass * STOMP_RATIO then
		return
	end

	local victimCharacter = victim.Character
	local victimRoot = victimCharacter and victimCharacter:FindFirstChild("HumanoidRootPart")
	local victimHumanoid = victimCharacter and victimCharacter:FindFirstChildOfClass("Humanoid")
	if not victimRoot or not victimHumanoid or victimHumanoid.Health <= 0 then
		return
	end

	dropLoot(victimRoot.Position, victimMass)
	attacker:SetAttribute("Mass", attackerMass + math.max(1, math.floor(victimMass / 2)))
	victim:SetAttribute("Mass", 5)

	for _, player in ipairs({attacker, victim}) do
		local stats = player:FindFirstChild("leaderstats")
		local mass = stats and stats:FindFirstChild("Mass")
		if mass then
			mass.Value = player:GetAttribute("Mass")
		end
	end

	victimHumanoid.Health = 0
end

task.spawn(function()
	while true do
		for _, attacker in ipairs(Players:GetPlayers()) do
			local character = attacker.Character
			local root = character and character:FindFirstChild("HumanoidRootPart")
			local humanoid = character and character:FindFirstChildOfClass("Humanoid")

			if root and humanoid and humanoid.Health > 0 then
				for _, bot in ipairs(botsFolder:GetChildren()) do
					if bot:IsA("BasePart") and isAbove(root, bot.Position) then
						stompBot(attacker, bot)
					end
				end

				for _, victim in ipairs(Players:GetPlayers()) do
					local victimRoot = victim.Character and victim.Character:FindFirstChild("HumanoidRootPart")
					if victimRoot and isAbove(root, victimRoot.Position) then
						stompPlayer(attacker, victim)
					end
				end
			end
		end

		task.wait(CHECK_INTERVAL)
	end
end)

print("Stomp upgrade activo: si sos 45% mas grande y caes encima, aplastas.")
]]

scriptObject.Parent = ServerScriptService

print("Upgrade de aplastar agregado. Detene y volve a Probar.")
