let mongoose = require('mongoose'),
    settings = require('./settings');

let mongoURI = `mongodb://${settings.host}:${settings.port}/${settings.db}`,
    MongoDB  = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err) {
    console.log("error:", err.message);
});
MongoDB.once('open', function() {
    console.log("mongodb connection open");
});

module.exports = MongoDB;
