
function Spells(house) {

    console.log(house);

    if (house === "Fire") {
        const fireSpells = [
            {
                spell: [
                    {
                        name: "Fireball",
                        value: 10
                    },
                    {
                        name: "Cloud of Ash",
                        value: 20
                    },
                    {
                        name: "Lava Cannon",
                        value: 30
                    },
                    {
                        name: "Rain of Fire",
                        value: 40
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
                    value: 10
                },
                {
                    name: "Acid Rain",
                    value: 20
                },
                {
                    name: "Water Lasso",
                    value: 30
                },
                {
                    name: "Tsunami",
                    value: 40
                }]
            }]
        return waterSpells
    }
    else if (house === "Air") {
        const airSpells = [
            {
                spell: [{
                    name: "Wind Gust",
                    value: 10
                },
                {
                    name: "Air Strike",
                    value: 20
                },
                {
                    name: "Tornado",
                    value: 30
                },
                {
                    name: "Dark Storm",
                    value: 40
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
                    value: 10
                },
                {
                    name: "Rock Slide",
                    value: 20
                },
                {
                    name: "Sand Storm",
                    value: 30
                },
                {
                    name: "Earthquake",
                    value: 40
                }]
            }
        ]
        return earthSpells
    }

}

export default Spells;