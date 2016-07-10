var State = require('./models/loginState');
var User = require('./models/User');
var Class = require('./models/class');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/login', function(req, res) {
        res.render('login', {
            title: '登录'
        });
    });

    app.post('/api/loginState', function(req, res) {

        State.findByName(req.body, function (doc) {

            res.json({
                error_code: 0,
                data: doc
            });
        });

    });

    app.post('/api/login', function (req, res) {

        User.loginByID(req.body, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });

    });

    app.get('/api/getUser/:userid', function (req, res) {
        console.log('Get User In Router');

        User.getUser(req.params, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });
    });

    app.get('/api/classList', function (req, res) {
        console.log('Get Class In Router');

        Class.classList(function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });
    });

    app.get('/api/userClassList/:userid', function (req, res) {
        console.log('Get User Class In Router');

        User.getUserClass(req.params, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });
    });

    app.get('/api/classDetail/:classid', function (req, res) {
        console.log('Get Class Detail In Router');

        Class.classDetail(req.params, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });
    });

};
