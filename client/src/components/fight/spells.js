
function Spells(house) {

    console.log(house);

    if (house === "Fire") {
        const fireSpells = [
            {
                spell: [
                    {
                        name: "Fireball",
                        value: 100
                    },
                    {
                        name: "Cloud of Ash",
                        value: 180
                    },
                    {
                        name: "Lava Cannon",
                        value: 220
                    },
                    {
                        name: "Rain of Fire",
                        value: 410
                    }]
            }
        ]
        return fireSpells
    }
    else if (house === "Water") {
        const waterSpells = [
            {
                spell: [{
                    name: "Ice Blast",
                    value: 100
                },
                {
                    name: "Acid Rain",
                    value: 180
                },
                {
                    name: "Water Lasso",
                    value: 220
                },
                {
                    name: "Tsunami",
                    value: 410
                }]
            }]
        return waterSpells
    }
    else if (house === "Air") {
        const airSpells = [
            {
                spell: [{
                    name: "Wind Gust",
                    value: 100
                },
                {
                    name: "Air Spell",
                    value: 180
                },
                {
                    name: "Tornado",
                    value: 220
                },
                {
                    name: "Dark Storm",
                    value: 410
                }]
            }
        ]
        return airSpells
    }
    else if (house === "Earth") {
        const earthSpells = [
            {
                spell: [{
                    name: "Quicksand",
                    value: 100
                },
                {
                    name: "Rock Slide",
                    value: 180
                },
                {
                    name: "Earth Spell",
                    value: 220
                },
                {
                    name: "Earthquake",
                    value: 410
                }]
            }
        ]
        return earthSpells
    }

}

export default Spells;