const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

const players = [
    {id: 1, name: "Cristiano Ronaldo", team: "Al-Nassr"},
    {id: 2, name: "Lionel Messi", team: "Inter Miami"},
    {id: 3, name: "Neymar Jr.", team: "Al-Hilal"},
    {id: 4, name: "Kylian Mbappé", team: "Paris Saint-Germain"},
    {id: 5, name: "Mohamed Salah", team: "Liverpool"},
];

app.get("/players", (req,res)=>{
    res.json(players);
});

app.get("/players/:id", (req,res)=>{
    const playerId = parseInt(req.params.id);
    const player = players.find(p => p.id === playerId);
    if (player) {
        res.json(player);
    } else {
        res.status(404).send("Player not found");
    }
});

app.post("/players", (req,res)=>{
    const newPlayer = {
        id: players.length + 1,
        name: req.body.name,
        team: req.body.team
    };
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(PORT, ()=>{
    console.log("App running on port "+PORT);
});