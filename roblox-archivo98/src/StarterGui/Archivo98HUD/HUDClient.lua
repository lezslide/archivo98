local ReplicatedStorage = game:GetService("ReplicatedStorage")

local statusEvent = ReplicatedStorage:WaitForChild("Archivo98Status")

local gui = script.Parent
gui.ResetOnSpawn = false

local frame = Instance.new("Frame")
frame.Name = "Panel"
frame.AnchorPoint = Vector2.new(0, 0)
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
title.Name = "Title"
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
counter.Name = "Counter"
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
objective.Name = "Objective"
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
