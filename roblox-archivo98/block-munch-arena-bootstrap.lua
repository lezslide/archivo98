local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ServerScriptService = game:GetService("ServerScriptService")
local StarterGui = game:GetService("StarterGui")
local Lighting = game:GetService("Lighting")

local function clear(parent, name)
	local item = parent:FindFirstChild(name)
	if item then
		item:Destroy()
	end
end

clear(workspace, "BlockMunchArena")
clear(workspace, "FruitSpawns")
clear(workspace, "FoodCubes")
clear(workspace, "Projectiles")
clear(ServerScriptService, "BlockMunchServer")
clear(StarterGui, "BlockMunchHUD")
clear(ReplicatedStorage, "BlockMunchFire")

Lighting.ClockTime = 14
Lighting.Brightness = 2
Lighting.Ambient = Color3.fromRGB(110, 120, 110)

local arena = Instance.new("Folder")
arena.Name = "BlockMunchArena"
arena.Parent = workspace

local fruitSpawns = Instance.new("Folder")
fruitSpawns.Name = "FruitSpawns"
fruitSpawns.Parent = workspace

local function part(name, size, position, color, parent, material)
	local p = Instance.new("Part")
	p.Name = name
	p.Size = size
	p.Position = position
	p.Anchored = true
	p.Color = color
	p.Material = material or Enum.Material.SmoothPlastic
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Parent = parent or arena
	return p
end

part("GrassArena", Vector3.new(170, 2, 170), Vector3.new(0, -1, 0), Color3.fromRGB(70, 158, 72), arena, Enum.Material.Grass)
part("WallNorth", Vector3.new(174, 18, 4), Vector3.new(0, 8, -87), Color3.fromRGB(102, 68, 38), arena, Enum.Material.WoodPlanks)
part("WallSouth", Vector3.new(174, 18, 4), Vector3.new(0, 8, 87), Color3.fromRGB(102, 68, 38), arena, Enum.Material.WoodPlanks)
part("WallWest", Vector3.new(4, 18, 174), Vector3.new(-87, 8, 0), Color3.fromRGB(102, 68, 38), arena, Enum.Material.WoodPlanks)
part("WallEast", Vector3.new(4, 18, 174), Vector3.new(87, 8, 0), Color3.fromRGB(102, 68, 38), arena, Enum.Material.WoodPlanks)

for x = -60, 60, 30 do
	for z = -60, 60, 30 do
		if math.abs(x) ~= math.abs(z) then
			part("DirtBlock", Vector3.new(10, 8, 10), Vector3.new(x, 3, z), Color3.fromRGB(126, 86, 54), arena, Enum.Material.Ground)
			part("GrassCap", Vector3.new(10.2, 1, 10.2), Vector3.new(x, 7.5, z), Color3.fromRGB(65, 143, 63), arena, Enum.Material.Grass)
		end
	end
end

for i, pos in ipairs({
	Vector3.new(-70, 2, -70), Vector3.new(70, 2, -70), Vector3.new(-70, 2, 70), Vector3.new(70, 2, 70),
	Vector3.new(-35, 2, -40), Vector3.new(30, 2, -35), Vector3.new(-40, 2, 35), Vector3.new(35, 2, 40),
	Vector3.new(0, 2, 0), Vector3.new(-12, 2, 18), Vector3.new(18, 2, -12), Vector3.new(55, 2, 0),
	Vector3.new(-55, 2, 0), Vector3.new(0, 2, 55), Vector3.new(0, 2, -55)
}) do
	local s = Instance.new("Part")
	s.Name = "FruitSpawn" .. i
	s.Size = Vector3.new(1, 1, 1)
	s.Position = pos
	s.Anchored = true
	s.Transparency = 1
	s.CanCollide = false
	s.Parent = fruitSpawns
end

for i, pos in ipairs({
	Vector3.new(-12, 2, -78), Vector3.new(12, 2, -78), Vector3.new(-12, 2, 78), Vector3.new(12, 2, 78)
}) do
	local spawn = Instance.new("SpawnLocation")
	spawn.Name = "Spawn" .. i
	spawn.Size = Vector3.new(8, 1, 8)
	spawn.Position = pos
	spawn.Anchored = true
	spawn.Neutral = true
	spawn.Color = Color3.fromRGB(92, 160, 220)
	spawn.Parent = arena
end

local fireEvent = Instance.new("RemoteEvent")
fireEvent.Name = "BlockMunchFire"
fireEvent.Parent = ReplicatedStorage

local server = Instance.new("Script")
server.Name = "BlockMunchServer"
server.Source = [[
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Debris = game:GetService("Debris")

local fireEvent = ReplicatedStorage:WaitForChild("BlockMunchFire")
local foodFolder = Instance.new("Folder")
foodFolder.Name = "FoodCubes"
foodFolder.Parent = workspace

local projectileFolder = Instance.new("Folder")
projectileFolder.Name = "Projectiles"
projectileFolder.Parent = workspace

local START_MASS = 5
local MAX_MASS = 45
local MIN_FIRE_MASS = 2
local FOOD_TARGET = 45

local playerMass = {}

local function getScale(mass)
	return 0.8 + math.clamp(mass, 1, MAX_MASS) * 0.045
end

local function applyScale(player)
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

local function updateStats(player)
	local mass = playerMass[player] or START_MASS
	player:SetAttribute("Mass", mass)
	local leaderstats = player:FindFirstChild("leaderstats")
	if leaderstats and leaderstats:FindFirstChild("Mass") then
		leaderstats.Mass.Value = mass
	end
	applyScale(player)
end

local function addMass(player, amount)
	playerMass[player] = math.clamp((playerMass[player] or START_MASS) + amount, 0, MAX_MASS)
	updateStats(player)
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
		if not player then
			return
		end
		addMass(player, cube:GetAttribute("MassValue") or 1)
		cube:Destroy()
	end)
end

local function randomArenaPosition()
	return Vector3.new(math.random(-76, 76), 2.2, math.random(-76, 76))
end

task.spawn(function()
	while true do
		while #foodFolder:GetChildren() < FOOD_TARGET do
			makeFood(randomArenaPosition(), 1)
		end
		task.wait(1.5)
	end
end)

local function dropLoot(position, amount)
	for i = 1, math.clamp(amount, 4, 18) do
		local offset = Vector3.new(math.random(-8, 8), 2.2, math.random(-8, 8))
		makeFood(position + offset, 1)
	end
end

local function eliminate(player)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if root then
		dropLoot(root.Position, playerMass[player] or START_MASS)
	end
	playerMass[player] = START_MASS
	updateStats(player)
	local humanoid = character and character:FindFirstChildOfClass("Humanoid")
	if humanoid then
		humanoid.Health = 0
	end
end

local function damage(player, amount)
	addMass(player, -amount)
	if (playerMass[player] or 0) <= 0 then
		eliminate(player)
	end
end

local function fireProjectile(player, targetPosition)
	local mass = playerMass[player] or START_MASS
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if not root or mass < MIN_FIRE_MASS then
		return
	end

	addMass(player, -1)

	local direction = targetPosition - root.Position
	if direction.Magnitude < 1 then
		direction = root.CFrame.LookVector
	else
		direction = direction.Unit
	end

	local projectile = Instance.new("Part")
	projectile.Name = "MassShot"
	projectile.Shape = Enum.PartType.Ball
	projectile.Size = Vector3.new(2.2, 2.2, 2.2)
	projectile.Position = root.Position + direction * 5
	projectile.Color = Color3.fromRGB(70, 210, 255)
	projectile.Material = Enum.Material.Neon
	projectile.CanCollide = false
	projectile:SetAttribute("ShooterUserId", player.UserId)
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
		local target = Players:GetPlayerFromCharacter(hit.Parent)
		if target and target ~= player then
			hitOnce = true
			damage(target, 1)
			projectile:Destroy()
		elseif hit.CanCollide and not hit:IsDescendantOf(character) then
			hitOnce = true
			projectile:Destroy()
		end
	end)

	Debris:AddItem(projectile, 3)
end

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
		updateStats(player)
	end)

	updateStats(player)
end)

Players.PlayerRemoving:Connect(function(player)
	playerMass[player] = nil
end)

fireEvent.OnServerEvent:Connect(function(player, targetPosition)
	if typeof(targetPosition) == "Vector3" then
		fireProjectile(player, targetPosition)
	end
end)
]]
server.Parent = ServerScriptService

local gui = Instance.new("ScreenGui")
gui.Name = "BlockMunchHUD"
gui.ResetOnSpawn = false
gui.Parent = StarterGui

local client = Instance.new("LocalScript")
client.Name = "BlockMunchClient"
client.Source = [[
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local UserInputService = game:GetService("UserInputService")

local player = Players.LocalPlayer
local mouse = player:GetMouse()
local fireEvent = ReplicatedStorage:WaitForChild("BlockMunchFire")

local gui = script.Parent

local frame = Instance.new("Frame")
frame.Size = UDim2.fromOffset(290, 86)
frame.Position = UDim2.fromOffset(18, 18)
frame.BackgroundColor3 = Color3.fromRGB(22, 26, 20)
frame.BackgroundTransparency = 0.08
frame.BorderSizePixel = 0
frame.Parent = gui

local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 8)
corner.Parent = frame

local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, -24, 0, 28)
title.Position = UDim2.fromOffset(12, 10)
title.BackgroundTransparency = 1
title.Font = Enum.Font.GothamBold
title.Text = "BLOCK MUNCH ARENA"
title.TextColor3 = Color3.fromRGB(238, 242, 230)
title.TextSize = 17
title.TextXAlignment = Enum.TextXAlignment.Left
title.Parent = frame

local massLabel = Instance.new("TextLabel")
massLabel.Size = UDim2.new(1, -24, 0, 24)
massLabel.Position = UDim2.fromOffset(12, 40)
massLabel.BackgroundTransparency = 1
massLabel.Font = Enum.Font.Gotham
massLabel.Text = "Masa / vida / balas: 5"
massLabel.TextColor3 = Color3.fromRGB(204, 226, 190)
massLabel.TextSize = 15
massLabel.TextXAlignment = Enum.TextXAlignment.Left
massLabel.Parent = frame

local hint = Instance.new("TextLabel")
hint.Size = UDim2.new(1, -24, 0, 18)
hint.Position = UDim2.fromOffset(12, 62)
hint.BackgroundTransparency = 1
hint.Font = Enum.Font.Gotham
hint.Text = "Click: disparar masa"
hint.TextColor3 = Color3.fromRGB(160, 180, 155)
hint.TextSize = 12
hint.TextXAlignment = Enum.TextXAlignment.Left
hint.Parent = frame

local function refresh()
	local mass = player:GetAttribute("Mass") or 5
	massLabel.Text = "Masa / vida / balas: " .. tostring(mass)
end

player:GetAttributeChangedSignal("Mass"):Connect(refresh)
refresh()

UserInputService.InputBegan:Connect(function(input, processed)
	if processed then
		return
	end
	if input.UserInputType == Enum.UserInputType.MouseButton1 then
		fireEvent:FireServer(mouse.Hit.Position)
	end
end)
]]
client.Parent = gui

print("Block Munch Arena creado. Presiona Probar. Come cubos para crecer y click para disparar.")
