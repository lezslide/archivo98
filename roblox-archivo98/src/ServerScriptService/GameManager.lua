local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local TOTAL_DISCS = 5
local DISCS_FOLDER_NAME = "Discos"
local EXIT_PART_NAME = "Salida"

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
	if not state then
		return
	end

	statusEvent:FireClient(player, {
		discs = state.discs,
		totalDiscs = TOTAL_DISCS,
		message = message,
		won = state.won,
	})
end

local function setupPlayer(player)
	playerState[player] = {
		discs = 0,
		won = false,
	}

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

local function bindDisc(disc)
	if not disc:IsA("BasePart") then
		return
	end

	disc.CanTouch = true
	disc.Touched:Connect(function(hit)
		local character = hit.Parent
		local player = Players:GetPlayerFromCharacter(character)
		if player then
			collectDisc(player, disc)
		end
	end)
end

local function bindExit(exitPart)
	exitPart.Touched:Connect(function(hit)
		local character = hit.Parent
		local player = Players:GetPlayerFromCharacter(character)
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
end

for _, player in Players:GetPlayers() do
	setupPlayer(player)
end

Players.PlayerAdded:Connect(setupPlayer)
Players.PlayerRemoving:Connect(function(player)
	playerState[player] = nil
end)

local discsFolder = workspace:WaitForChild(DISCS_FOLDER_NAME)
for _, disc in discsFolder:GetChildren() do
	bindDisc(disc)
end

discsFolder.ChildAdded:Connect(bindDisc)

local exitPart = workspace:WaitForChild(EXIT_PART_NAME)
bindExit(exitPart)
