const express = require('express');
const factRouter = express.Router();

const {
    fetchfacts,
    addnewfact,
    deletefact,
} = require('../controller/fact-controller');


factRouter.get('/:galaxy', fetchfacts);
factRouter.post('/stars', addnewfact);
factRouter.delete('/stars/:id', deletefact);





module.exports = factRouter;
