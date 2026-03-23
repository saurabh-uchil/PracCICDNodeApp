const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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

app.get("/", (req, res) => {
    res.send("<h2 style='color: blue;'>Welcome to the Home Page</h2>");
});

app.listen(PORT, ()=>{
    console.log("App running on port "+PORT);
});