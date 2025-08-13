const express = require('express');
const planetRouter = express.Router();

const {
    fetchPlanetFacts,
    addPlanetFact,
    deletePlanetFact,
} = require("../controller/planet-controller");

planetRouter.get('/:galaxy', fetchPlanetFacts);
planetRouter.post('/', addPlanetFact);
planetRouter.delete('/:id', deletePlanetFact);





module.exports = planetRouter;
