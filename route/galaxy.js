const express = require('express');
const galaxyRouter = express.Router();

const {
    fetchGalaxyFacts,
    addGalaxyFact,
    deleteGalaxyFact,
} = require("../controller/galaxy-controller");

galaxyRouter.get('/:galaxy', fetchGalaxyFacts);
galaxyRouter.post('/', addGalaxyFact);
galaxyRouter.delete('/:id', deleteGalaxyFact);





module.exports = galaxyRouter;
