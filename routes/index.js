var State = require('./models/loginState');
var Users = require('./models/users');

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

        Users.loginByID(req.body, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });

    });

    app.get('/api/getUser/:username', function (req, res) {
        console.log('getUser in router...');

        Users.getUser(req.params, function (doc) {
            res.json({
                error_code: 0,
                data: doc
            });
        });
    });

};
