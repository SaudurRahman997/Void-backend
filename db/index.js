const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://saudurrahman19:C7VVoSDNNTHEa4SQ@cluster0.qf2mpnm.mongodb.net/')
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((e) => console.log('❌ Connection Error:', e));
