module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Express'
        });
    });

    app.get('/api/test', function(req, res) {
        console.log('got request!');
        res.json({
            error_code: 0,
            data: {
                name: 'qiaoyixuan',
                age: 23
            }
        });
    });
};
