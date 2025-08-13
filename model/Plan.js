const mongo = require('mongoose');
const Schema1 = mongo.Schema;

const planetSchema2 = new Schema1({
    galaxy: { type: String, required: true },
    text: { type: String, required: true },
});

module.exports = mongo.model('Plan', planetSchema2);



