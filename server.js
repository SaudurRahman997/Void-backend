// const express = require('express');
// const cors = require('cors');
// const factRouter = require('./route/facts');
// const planetRouter = require('./route/planet');
// require('./db');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/facts', factRouter);

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });


// app.use("/api/planets", planetRouter);

// app.listen(5174, () => console.log('App is running on port 5174...'));

const express = require('express');
const cors = require('cors');
require('./db'); // MongoDB connection

const factRouter = require('./route/facts');
const planetRouter = require('./route/planet');
const galaxyRouter = require('./route/galaxy')

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/facts', factRouter);
app.use('/api/planets', planetRouter);
app.use('/api/galaxies', galaxyRouter)

// Test route
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(5174, () => console.log('App is running on port 5174...'));
