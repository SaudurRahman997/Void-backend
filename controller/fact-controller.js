const mongoose = require('mongoose');
const Fact = require('../model/Fact');
console.log("fact ", Fact);

// Hardcoded defaults for now
const defaultFactsMap = {
    "O Type": [
        "O-type stars are the hottest stars in the universe.",
        "They have surface temperatures above 30,000°C.",
        "They emit intense ultraviolet radiation.",
        "They are rare and massive.",
        "They burn their fuel extremely quickly.",
        "Their lifespans are only a few million years.",
        "They can be up to 100 times more massive than the Sun.",
        "They often end their lives as supernovae.",
        "They are usually found in star-forming regions.",
        "Their strong stellar winds can shape nearby nebulae."
    ],
    "A Type": [
        "A-type stars have surface temperatures between 7,500 and 10,000 Kelvin.",
        "They appear white or bluish-white in color.",
        "These stars are typically 1.4 to 2 times the Sun’s mass.",
        "A-type stars are highly luminous, up to 80 times the Sun’s brightness.",
        "They have strong hydrogen spectral lines in their spectra.",
        "Sirius, the brightest star in the night sky, is an A-type star.",
        "Their lifespans are around a few hundred million to a billion years.",
        "A-type stars are often found in binary systems.",
        "They can develop into white dwarfs after exhausting their fuel.",
        "Vega, in the Lyra constellation, is a well-known A-type star.",
    ],
    "B Type": [
        "B-type stars have surface temperatures between 10,000 and 30,000 Kelvin",
        "They appear blue or blue-white in color",
        "B-type stars are massive, typically 2 to 16 times the Sun’s mass",
        "They have relatively short lifespans, lasting tens of millions of years",
        "These stars are bright, often thousands of times more luminous than the Sun",
        "B-type stars are common in young star clusters",
        "They emit significant amounts of ultraviolet light",
        "Rigel, a bright star in the Orion constellation, is a B-type star",
        "B-type stars often have high rotation rates",
        "They can evolve into red supergiants or explode as supernovae",
    ],
    "K Type": [
        "K-type stars have surface temperatures between 3,700 and 5,200 Kelvin.",
        "They appear orange in color.",
        "These stars are 0.5 to 0.8 times the Sun’s mass.",
        "K-type stars are about 0.1 to 0.4 times the Sun’s luminosity.",
        "They have long lifespans, up to 70 billion years.",
        "Arcturus, in the Boötes constellation, is a K-type star.",
        "Their spectra show strong molecular bands and metal lines.",
        "K-type stars are common and stable, often hosting exoplanets.",
        "They are cooler and less massive than the Sun.",
        "They evolve into white dwarfs after a red giant phase.",
    ],
    "M Type": [
        "M-type stars have surface temperatures below 3,700 Kelvin.",
        "They appear red in color, often called red dwarfs.",
        "These stars are typically 0.08 to 0.5 times the Sun’s mass.",
        "M-type stars are the most common, making up about 75% of all stars",
        "They are very faint, with 0.001 to 0.08 times the Sun’s luminosity.",
        "Their lifespans can exceed 100 billion years.",
        "Proxima Centauri, the closest star to the Sun, is an M-type star.",
        "M-type stars have spectra dominated by molecular bands, like titanium oxide.",
        "They are prone to stellar flares due to strong magnetic activity.",
        "They rarely evolve beyond the main sequence due to their long lives.",
    ],

    "G Type": ["G-type stars have surface temperatures between 5,200 and 6,000 Kelvin.",
        "They appear yellow in color, like our Sun.",
        "These stars are typically 0.8 to 1.2 times the Sun’s mass.",
        "G-type stars have lifespans of about 8 to 10 billion years.",
        "The Sun is a G-type main-sequence star (G2V).",
        "They are moderately luminous, similar to the Sun’s brightness.",
        "G-type stars have spectra with prominent hydrogen and metal lines.",
        "They are stable, making them suitable for hosting habitable planets.",
        "Alpha Centauri A is a well-known G-type star.",
        "They evolve into red giants and eventually white dwarfs.",
    ],

};

// Get facts for a specific galaxy
const fetchfacts = async (req, res) => {
    const galaxy = req.params.galaxy;

    try {
        const userFacts = await Fact.find({ galaxy });

        // Combine default + user facts
        const defaultFacts = defaultFactsMap[galaxy] || [];
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
const addnewfact = async (req, res) => {
    const { galaxy, text } = req.body;

    if (!galaxy || !text) {
        return res.status(400).json({ message: 'Galaxy and text are required.' });
    }

    try {
        const newFact = new Fact({ galaxy, text });
        await newFact.save();
        return res.status(200).json({ _id: newFact._id, text: newFact.text });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Failed to add fact.' });
    }
};

// Delete a fact by ID (only user facts)
const deletefact = async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await Fact.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Fact not found or is default.' });
        }

        return res.status(200).json({ message: 'Deleted.' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Try again later.' });
    }
};

module.exports = { deletefact, fetchfacts, addnewfact };
