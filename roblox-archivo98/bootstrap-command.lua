local ServerScriptService = game:GetService("ServerScriptService")
local StarterGui = game:GetService("StarterGui")

local function clearIfExists(parent, name)
	local existing = parent:FindFirstChild(name)
	if existing then
		existing:Destroy()
	end
end

clearIfExists(workspace, "Discos")
clearIfExists(workspace, "Salida")
clearIfExists(workspace, "Archivo98_Mapa")
clearIfExists(ServerScriptService, "GameManager")
clearIfExists(StarterGui, "Archivo98HUD")

local mapFolder = Instance.new("Folder")
mapFolder.Name = "Archivo98_Mapa"
mapFolder.Parent = workspace

local function makePart(name, size, position, color, parent)
	local part = Instance.new("Part")
	part.Name = name
	part.Size = size
	part.Position = position
	part.Anchored = true
	part.Color = color
	part.Material = Enum.Material.Concrete
	part.Parent = parent or mapFolder
	return part
end

makePart("PisoArchivo", Vector3.new(90, 1, 70), Vector3.new(0, -0.5, 0), Color3.fromRGB(55, 59, 62))
makePart("ParedNorte", Vector3.new(90, 14, 2), Vector3.new(0, 6, -35), Color3.fromRGB(25, 28, 30))
makePart("ParedSur", Vector3.new(90, 14, 2), Vector3.new(0, 6, 35), Color3.fromRGB(25, 28, 30))
makePart("ParedOeste", Vector3.new(2, 14, 70), Vector3.new(-45, 6, 0), Color3.fromRGB(25, 28, 30))
makePart("ParedEste", Vector3.new(2, 14, 70), Vector3.new(45, 6, 0), Color3.fromRGB(25, 28, 30))

for i = 1, 6 do
	makePart("Estante_" .. i, Vector3.new(4, 10, 22), Vector3.new(-30 + (i - 1) * 12, 5, -6), Color3.fromRGB(72, 58, 48))
end

for i = 1, 8 do
	makePart("Caja_" .. i, Vector3.new(5, 4, 5), Vector3.new(-36 + (i - 1) * 10, 2, 22), Color3.fromRGB(96, 78, 52))
end

local discsFolder = Instance.new("Folder")
discsFolder.Name = "Discos"
discsFolder.Parent = workspace

local discPositions = {
	Vector3.new(-34, 2, -24),
	Vector3.new(26, 2, -22),
	Vector3.new(-18, 2, 14),
	Vector3.new(34, 2, 18),
	Vector3.new(0, 2, 30),
}

for i, position in ipairs(discPositions) do
	local disc = Instance.new("Part")
	disc.Name = "Disco" .. i
	disc.Shape = Enum.PartType.Cylinder
	disc.Size = Vector3.new(0.4, 3, 3)
	disc.Position = position
	disc.Orientation = Vector3.new(0, 0, 90)
	disc.Anchored = true
	disc.CanCollide = false
	disc.Color = Color3.fromRGB(150, 24, 42)
	disc.Material = Enum.Material.Neon
	disc.Parent = discsFolder
end

local exitPart = makePart("Salida", Vector3.new(12, 12, 1), Vector3.new(0, 6, -34), Color3.fromRGB(20, 130, 82), workspace)
exitPart.Material = Enum.Material.Neon

local spawn = Instance.new("SpawnLocation")
spawn.Name = "InicioArchivo98"
spawn.Size = Vector3.new(8, 1, 8)
spawn.Position = Vector3.new(0, 0.5, 28)
spawn.Anchored = true
spawn.Color = Color3.fromRGB(30, 90, 120)
spawn.Parent = workspace

local gameManager = Instance.new("Script")
gameManager.Name = "GameManager"
gameManager.Source = [[
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local TOTAL_DISCS = 5
local statusEvent = ReplicatedStorage:FindFirstChild("Archivo98Status")

if not statusEvent then
	statusEvent = Instance.new("RemoteEvent")
	statusEvent.Name = "Archivo98Status"
	statusEvent.Parent = ReplicatedStorage
end

local playerState = {}
local collectedByDisc = {}

local function sendStatus(player, message)
	local state = playerState[player]
	if state then
		statusEvent:FireClient(player, {
			discs = state.discs,
			totalDiscs = TOTAL_DISCS,
			message = message,
			won = state.won,
		})
	end
end

local function setupPlayer(player)
	playerState[player] = { discs = 0, won = false }
	player.CharacterAdded:Connect(function()
		task.wait(0.5)
		sendStatus(player, "Recupera los discos de Archivo 98")
	end)
end

local function collectDisc(player, disc)
	local state = playerState[player]
	if not state or state.won or collectedByDisc[disc] then
		return
	end

	collectedByDisc[disc] = player
	state.discs += 1
	disc.Transparency = 1
	disc.CanTouch = false

	if state.discs >= TOTAL_DISCS then
		sendStatus(player, "Salida desbloqueada. Escapa del archivo.")
	else
		sendStatus(player, "Disco recuperado")
	end
end

for _, player in Players:GetPlayers() do
	setupPlayer(player)
end

Players.PlayerAdded:Connect(setupPlayer)
Players.PlayerRemoving:Connect(function(player)
	playerState[player] = nil
end)

workspace:WaitForChild("Discos").ChildAdded:Connect(function(disc)
	if disc:IsA("BasePart") then
		disc.Touched:Connect(function(hit)
			local player = Players:GetPlayerFromCharacter(hit.Parent)
			if player then
				collectDisc(player, disc)
			end
		end)
	end
end)

for _, disc in workspace:WaitForChild("Discos"):GetChildren() do
	if disc:IsA("BasePart") then
		disc.Touched:Connect(function(hit)
			local player = Players:GetPlayerFromCharacter(hit.Parent)
			if player then
				collectDisc(player, disc)
			end
		end)
	end
end

workspace:WaitForChild("Salida").Touched:Connect(function(hit)
	local player = Players:GetPlayerFromCharacter(hit.Parent)
	local state = player and playerState[player]

	if not state or state.won then
		return
	end

	if state.discs >= TOTAL_DISCS then
		state.won = true
		sendStatus(player, "Escapaste con el archivo completo.")
	else
		sendStatus(player, "Faltan discos para abrir la salida.")
	end
end)
]]
gameManager.Parent = ServerScriptService

local screenGui = Instance.new("ScreenGui")
screenGui.Name = "Archivo98HUD"
screenGui.ResetOnSpawn = false
screenGui.Parent = StarterGui

local hudClient = Instance.new("LocalScript")
hudClient.Name = "HUDClient"
hudClient.Source = [[
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local statusEvent = ReplicatedStorage:WaitForChild("Archivo98Status")

local gui = script.Parent
local frame = Instance.new("Frame")
frame.Name = "Panel"
frame.Position = UDim2.fromOffset(20, 20)
frame.Size = UDim2.fromOffset(320, 96)
frame.BackgroundColor3 = Color3.fromRGB(15, 17, 18)
frame.BackgroundTransparency = 0.12
frame.BorderSizePixel = 0
frame.Parent = gui

local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 8)
corner.Parent = frame

local title = Instance.new("TextLabel")
title.Position = UDim2.fromOffset(16, 12)
title.Size = UDim2.new(1, -32, 0, 24)
title.BackgroundTransparency = 1
title.Font = Enum.Font.GothamBold
title.Text = "ARCHIVO 98"
title.TextColor3 = Color3.fromRGB(235, 238, 232)
title.TextSize = 18
title.TextXAlignment = Enum.TextXAlignment.Left
title.Parent = frame

local counter = Instance.new("TextLabel")
counter.Position = UDim2.fromOffset(16, 38)
counter.Size = UDim2.new(1, -32, 0, 22)
counter.BackgroundTransparency = 1
counter.Font = Enum.Font.Gotham
counter.Text = "Discos: 0/5"
counter.TextColor3 = Color3.fromRGB(198, 210, 201)
counter.TextSize = 16
counter.TextXAlignment = Enum.TextXAlignment.Left
counter.Parent = frame

local objective = Instance.new("TextLabel")
objective.Position = UDim2.fromOffset(16, 62)
objective.Size = UDim2.new(1, -32, 0, 22)
objective.BackgroundTransparency = 1
objective.Font = Enum.Font.Gotham
objective.Text = "Recupera los discos de Archivo 98"
objective.TextColor3 = Color3.fromRGB(178, 190, 184)
objective.TextSize = 14
objective.TextXAlignment = Enum.TextXAlignment.Left
objective.TextTruncate = Enum.TextTruncate.AtEnd
objective.Parent = frame

statusEvent.OnClientEvent:Connect(function(payload)
	counter.Text = string.format("Discos: %d/%d", payload.discs, payload.totalDiscs)
	objective.Text = payload.message

	if payload.won then
		frame.BackgroundColor3 = Color3.fromRGB(20, 54, 39)
		title.Text = "ARCHIVO RECUPERADO"
	end
end)
]]
hudClient.Parent = screenGui

print("Archivo 98 creado. Presiona Probar para jugar.")
