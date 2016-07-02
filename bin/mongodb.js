var mongoose = require('mongoose'),
    settings = require('./settings');

var mongoURI = `mongodb://${settings.host}:${settings.port}/${settings.db}`;

var MongoDB  = mongoose.connect(mongoURI);

MongoDB.connection.on('error', function(err) {
    console.log("ERROR:", err.message);
});
MongoDB.connection.once('open', function() {
    console.log("MongoDB connected.");
});

module.exports = mongoose;
