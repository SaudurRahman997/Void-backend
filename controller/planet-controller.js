const Planet = require('../model/Plan');

// Default 10 facts for each planet
const defaultPlanetFacts = {
    Mercury: [
        "Mercury is the smallest planet in our solar system.",
        "It’s the closest planet to the Sun.",
        "A year on Mercury is just 88 Earth days.",
        "Mercury has no moons.",
        "It has extreme temperature variations.",
        "Its surface is covered in craters.",
        "Mercury has a very thin atmosphere.",
        "It is named after the Roman messenger god.",
        "It has been visited by the Mariner 10 and MESSENGER spacecraft.",
        "Mercury has a molten core."
    ],
    Venus: [
        "Venus is the hottest planet in the solar system.",
        "It has a thick, toxic atmosphere.",
        "Its surface pressure is 92 times that of Earth.",
        "A day on Venus is longer than its year.",
        "Venus rotates in the opposite direction to most planets.",
        "It is similar in size to Earth.",
        "Venus has no moons.",
        "Its clouds are made of sulfuric acid.",
        "It’s sometimes called Earth’s twin.",
        "Venus is named after the Roman goddess of love."
    ],
    Earth: [
        "Earth is the third planet from the Sun,",
        "It is the only known planet to support life,",
        "Earth’s atmosphere is rich in oxygen, making it habitable,",
        "About 71% of Earth’s surface is covered by water,",
        "It has one natural moon, commonly called the Moon,",
        "Earth’s magnetic field protects it from harmful solar radiation,",
        "It completes one rotation in about 24 hours, defining a day,",
        "Earth orbits the Sun every 365.25 days, defining a year,",
        "The planet has diverse ecosystems, from deserts to rainforests,",
        "Earth’s core is made of iron and nickel, generating its magnetic field,"
    ],
    Mars: [
        "Mars is the fourth planet from the Sun,",
        "It is known as the Red Planet due to its reddish iron-rich dust,",
        "Mars has the largest volcano in the solar system, Olympus Mons,",
        "It has two small moons, Phobos and Deimos,",
        "Mars’ thin atmosphere is mostly carbon dioxide,",
        "The planet has evidence of ancient water flows and polar ice caps,",
        "Mars takes about 687 Earth days to orbit the Sun,",
        "It has been explored by rovers like NASA’s Perseverance and Curiosity,",
        "Mars experiences massive dust storms that can cover the entire planet,",
        "The planet’s surface features the Valles Marineris, a vast canyon system,"
    ],
    Jupiter: [
        "Jupiter is the fifth planet from the Sun,",
        "It is the largest planet in the solar system, 11 times Earth’s diameter,",
        "Jupiter is a gas giant, primarily composed of hydrogen and helium,",
        "It has a massive storm called the Great Red Spot, ongoing for centuries,",
        "Jupiter has at least 95 known moons, including Ganymede, the largest,",
        "The planet has a faint ring system made of dust,",
        "Jupiter’s magnetic field is the strongest of any planet,",
        "It takes about 11.86 Earth years to orbit the Sun,",
        "Jupiter was closely studied by the Juno spacecraft since 2016,",
        "Its rapid rotation (10 hours per day) causes it to be slightly flattened,"
    ],
    Saturn: [
        "Saturn is the sixth planet from the Sun,",
        "It is famous for its extensive and bright ring system,",
        "Saturn is a gas giant, composed mostly of hydrogen and helium,",
        "It has at least 145 moons, with Titan being the largest,",
        "Saturn’s rings are made of ice, dust, and rocky particles,",
        "The planet takes about 29.5 Earth years to orbit the Sun,",
        "Saturn’s density is so low it could float in water,",
        "It was explored by the Cassini spacecraft from 2004 to 2017,",
        "Saturn’s atmosphere has bands of clouds and storms,",
        "Its moon Titan has a thick atmosphere and stable bodies of surface liquid,"
    ],
    Uranus: [
        "Uranus is the seventh planet from the Sun,",
        "It is an ice giant, with a composition of water, ammonia, and methane ices,",
        "Uranus has a pale cyan color due to methane in its atmosphere,",
        "It has a faint ring system and 27 known moons,",
        "Uranus rotates on its side, with an axial tilt of about 98 degrees,",
        "The planet takes 84 Earth years to orbit the Sun,",
        "It was visited only once, by Voyager 2 in 1986,",
        "Uranus has a cold atmosphere, with temperatures as low as -224°C,",
        "Its moons are named after Shakespearean and Pope’s literary characters,",
        "The planet’s magnetic field is tilted and offset from its center,"
    ],
    Neptune: [
        "Neptune is the eighth and farthest planet from the Sun,",
        "It is an ice giant, similar in composition to Uranus,",
        "Neptune’s deep blue color is due to methane absorption,",
        "It has strong winds, the fastest in the solar system, up to 2,400 km/h,",
        "Neptune has 14 known moons, with Triton being the largest,",
        "The planet has a faint, fragmented ring system,",
        "It takes about 164.8 Earth years to orbit the Sun,",
        "Neptune was discovered in 1846 based on mathematical predictions,",
        "Voyager 2 provided the only close-up images of Neptune in 1989,",
        "Its Great Dark Spot is a massive storm system, similar to Jupiter’s Great Red Spot,"
    ]

};


// Get facts for a specific galaxy
const fetchPlanetFacts = async (req, res) => {
    const galaxy = req.params.galaxy;

    try {
        const userFacts = await Planet.find({ galaxy });

        // Combine default + user facts
        const defaultFacts = defaultPlanetFacts[galaxy] || [];
        const mergedFacts = [
            ...defaultFacts.map(text => ({ text, isDefault: true })),
            ...userFacts.map(f => ({ _id: f._id, text: f.text, isDefault: false }))
        ];

        return res.status(200).json(mergedFacts);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Server error.' });
    }
};


// Add a new fact
const addPlanetFact = async (req, res) => {
    const { galaxy, text } = req.body;

    if (!galaxy || !text) {
        return res.status(400).json({ message: 'Galaxy and text are required.' });
    }

    try {
        const newFact = new Planet({ galaxy, text });
        await newFact.save();
        return res.status(200).json({ _id: newFact._id, text: newFact.text });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Failed to add fact.' });
    }
};

// Delete a fact by ID (only user facts)
const deletePlanetFact = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Planet.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Fact not found or is default.' });
        }

        return res.status(200).json({ message: 'Deleted.' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Try again later.' });
    }
};


module.exports = {
    fetchPlanetFacts,
    addPlanetFact,
    deletePlanetFact
};
