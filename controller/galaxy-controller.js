const Galaxy1 = require('../model/Glox'); // Change to your galaxy model
console.log('Galaxy1 model:', Galaxy1);


// Default 10 facts for each galaxy (example data)
const defaultGalaxyFacts = {
    milkyway: [
        "The Milky Way is about 100,000 light-years wide.",
        "It contains over 100 billion stars.",
        "Our solar system is located about 27,000 light-years from the center.",
        "The galactic center is home to a supermassive black hole.",
        "Spiral arms contain newer stars.",
        "It's a barred spiral galaxy.",
        "Dark matter makes up most of its mass.",
        "The Milky Way collides with Andromeda in 4.5B years.",
        "It appears as a glowing band in the night sky.",
        "The name comes from Greek mythology."
    ],
    andromeda: [
        "The Andromeda Galaxy, or Messier 31 (M31), is the closest spiral galaxy to the Milky Way, about 2.5 million light-years away.",
        "It is the largest galaxy in the Local Group, with a diameter of about 220,000 light-years.",
        "M31 contains approximately 1 trillion stars, more than twice the Milky Way’s estimated count.",
        "It is on a collision course with the Milky Way, expected to merge in about 4.5 billion years.",
        "Andromeda has a supermassive black hole at its center, with a mass of about 140 million solar masses.",
        "It was first observed as a “nebula” by Persian astronomer Al-Sufi around 964 AD and cataloged by Charles Messier in 1764.",
        "M31 has over 450 globular clusters and several satellite galaxies, including M32 and M110.",
        "Its bright disk and spiral arms make it visible to the naked eye under dark skies, the farthest object visible without aid.",
        "The galaxy is a site of active star formation, with numerous H II regions and young star clusters.",
        "Observations of Andromeda help astronomers understand the structure and evolution of spiral galaxies like our own.",
    ],
    whirlpool: [
        "The Whirlpool Galaxy, or Messier 51 (M51), is a spiral galaxy in Canes Venatici, about 23 million light-years away.",
        "It is interacting with a smaller companion galaxy, NGC 5195, which distorts its spiral arms.",
        "M51’s diameter is about 76,000 light-years, smaller than the Milky Way.",
        "The interaction with NGC 5195 triggers intense star formation, visible in its bright spiral arms.",
        "It was the first galaxy to have its spiral structure recognized, by Lord Rosse in 1845 using his telescope.",
        "The Whirlpool Galaxy is part of the Messier catalog, discovered by Charles Messier in 1773.",
        "It hosts a supermassive black hole at its center, with a mass of about 3 million solar masses.",
        "M51 is a prime example of a “grand design” spiral galaxy, with prominent, well-defined arms.",
        "Multiple supernovae have been observed in M51, including SN 1994I, SN 2005cs, and SN 2011dh.",
        "Its striking appearance makes it a favorite for astronomers studying galaxy interactions and star formation."
    ],
    sombrero: [
        "The Sombrero Galaxy, also known as Messier 104 (M104), is located about 29 million light-years from Earth in the Virgo constellation.",
        "It is a lenticular galaxy, characterized by a flat disk and a prominent central bulge, resembling a sombrero hat.",
        "The galaxy spans approximately 50,000 light-years in diameter, about half the size of the Milky Way.",
        "Its central bulge contains a supermassive black hole with a mass of about 1 billion solar masses.",
        "The Sombrero Galaxy has a striking dust lane, rich in gas and dust, encircling its disk, which is visible in optical images.",
        "It hosts around 2,000 globular clusters, significantly more than the Milky Way’s estimated 150–200.",
        "The galaxy is part of the Virgo Cluster, a collection of galaxies gravitationally bound together.",
        "Its bright nucleus and dust lane make it a favorite target for amateur astronomers and astrophotographers.",
        "The Sombrero Galaxy was discovered by Pierre Méchain in 1781 and later cataloged by Charles Messier.",
        "Infrared observations reveal ongoing star formation in its disk, despite its lenticular classification."
    ],
    ugc: [
        "UGC 12591 is a notable spiral galaxy in the Uppsala General Catalogue, located in the Perseus-Pisces Supercluster.",
        "It is one of the most massive known spiral galaxies, with a mass about four times that of the Milky Way.",
        "UGC 12591 is approximately 400 million light-years from Earth.",
        "It rotates at an exceptionally high speed, with velocities up to 500 km/s, indicating a massive dark matter halo.",
        "The galaxy’s diameter is roughly 170,000 light-years, larger than the Milky Way.",
        "It is classified as an S0/Sa galaxy, showing features of both lenticular and spiral galaxies.",
        "UGC 12591 has a low star formation rate compared to typical spiral galaxies, suggesting an aging stellar population.",
        "It was identified as a candidate for the most massive spiral galaxy in a 2017 study using data from the Spitzer Space Telescope.",
        "The galaxy’s high mass and rotation make it a key subject for studying galaxy dynamics and dark matter.",
        "It is relatively isolated, with fewer interactions with nearby galaxies compared to those in dense clusters."
    ],
    messier: [
        "Messier 87 (M87) is a supergiant elliptical galaxy in the Virgo Cluster, about 53 million light-years from Earth.",
        "It hosts a supermassive black hole at its center, with a mass of approximately 6.5 billion solar masses.",
        "M87 is famous for the first-ever image of a black hole, captured by the Event Horizon Telescope in 2019.",
        "The galaxy is one of the most massive in the local universe, containing up to 1 trillion stars.",
        "It has a powerful jet of relativistic plasma extending thousands of light-years, powered by its black hole.",
        "M87 is surrounded by about 12,000 globular clusters, far more than most galaxies.",
        "The galaxy’s elliptical shape results from multiple mergers with smaller galaxies over billions of years.",
        "It was discovered by Charles Messier in 1781 and is a prominent target for both professional and amateur astronomers.",
        "M87 is a strong source of radio, X-ray, and gamma-ray emissions due to its active galactic nucleus.",
        "Its location in the Virgo Cluster makes it a key object for studying galaxy cluster dynamics."
    ],
    pinwheel: [
        "The Pinwheel Galaxy, or Messier 101 (M101), is a face-on spiral galaxy in Ursa Major, about 21 million light-years away.",
        "It spans approximately 170,000 light-years, making it one of the largest disk galaxies known.",
        "M101 has well-defined spiral arms, rich in star-forming regions and young, blue stars.",
        "It contains over 1 trillion stars, significantly more than the Milky Way’s estimated 100–400 billion.",
        "The galaxy has several companion galaxies, including NGC 5474, which may influence its structure.",
        "M101 is a prolific star-forming galaxy, with numerous H II regions visible as bright knots in its arms.",
        "It was discovered by Pierre Méchain in 1781 and is part of the Messier catalog.",
        "The Pinwheel Galaxy is a popular target for astrophotography due to its bright, detailed spiral structure.",
        "Supernovae, such as SN 2011fe, have been observed in M101, aiding studies of cosmic distance scales.",
        "Its low surface brightness makes it challenging to observe without a telescope in light-polluted skies."
    ],
    centaurus: [
        "Centaurus A, or NGC 5128, is a peculiar galaxy in the Centaurus constellation, about 12 million light-years away.",
        "It is a lenticular galaxy with features of both elliptical and spiral galaxies, likely formed by a merger.",
        "Centaurus A has a prominent dust lane bisecting its center, a remnant of a smaller spiral galaxy it absorbed.",
        "It hosts a supermassive black hole, with a mass of about 55 million solar masses, powering an active galactic nucleus.",
        "The galaxy emits strong radio waves, making it one of the brightest radio galaxies in the sky.",
        "Its diameter is approximately 60,000 light-years, smaller than the Milky Way.",
        "Centaurus A is part of the Centaurus A/M83 Group, a small group of galaxies.",
        "It was discovered by James Dunlop in 1826 and is a key target for studying active galaxies.",
        "The galaxy’s jets, extending thousands of light-years, are visible in radio and X-ray wavelengths.",
        "Its complex structure provides insights into galaxy mergers and black hole activity."
    ],
    triangulum: [
        "The Triangulum Galaxy, or Messier 33 (M33), is a spiral galaxy in the Triangulum constellation, about 2.7 million light-years away.",
        "It is the third-largest member of the Local Group, after Andromeda and the Milky Way.",
        "M33 spans about 60,000 light-years, roughly half the size of the Milky Way.",
        "It is a flocculent spiral, with patchy, fragmented spiral arms rather than well-defined ones.",
        "The galaxy is a prolific star-forming region, with bright H II regions like NGC 604, one of the largest known.",
        "It was likely discovered by Giovanni Battista Hodierna before 1654 and later cataloged by Charles Messier.",
        "M33 is gravitationally bound to the Andromeda Galaxy and may become a satellite of it in the future.",
        "It contains an estimated 40 billion stars, fewer than the Milky Way’s 100–400 billion.",
        "The Triangulum Galaxy is visible with binoculars or a small telescope under dark skies.",
        "Its proximity makes it a key target for studying spiral galaxy structure and star formation."
    ],

    // Add more galaxies and their facts as needed
};

// Get facts for a specific galaxy
const fetchGalaxyFacts = async (req, res) => {
    const galaxy = req.params.galaxy;

    try {
        const userFacts = await Galaxy1.find({ galaxy });

        // Combine default + user facts
        const defaultFacts = defaultGalaxyFacts[galaxy] || [];
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
const addGalaxyFact = async (req, res) => {
    const { galaxy, text } = req.body;

    if (!galaxy || !text) {
        return res.status(400).json({ message: 'Galaxy and text are required.' });
    }

    try {
        const newFact = new Galaxy1({ galaxy, text });
        await newFact.save();
        return res.status(200).json({ _id: newFact._id, text: newFact.text });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Failed to add fact.' });
    }
};

// Delete a fact by ID (only user facts)
const deleteGalaxyFact = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Galaxy1.findByIdAndDelete(id);
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
    fetchGalaxyFacts,
    addGalaxyFact,
    deleteGalaxyFact
};
