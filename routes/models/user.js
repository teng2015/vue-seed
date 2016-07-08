var mongodb = require('../../bin/mongodb');
var Schema = mongodb.Schema;

var userSchema = new Schema({
    name: String
}, {collection: 'users'});

var User = mongodb.model('user', userSchema);

var userDao = function() {};

userDao.prototype.loginByID = function(info, callback) {
    console.log('query user, userid:', info.userid);

    User.findOne({id: info.userid}, function (err, doc) {
        if(err) {
            console.log('查询失败');
            return;
        }
        doc = JSON.parse(JSON.stringify(doc));
        if(doc.password === info.password) {
            callback({
                data: doc,
                result: true,
                msg: "登录成功"
            });
        } else {
            callback({
                data: {},
                result: false,
                msg: "登录失败"
            });
        }
    });

};

userDao.prototype.getUser = function(info, callback) {
    console.log('query user, userid:', info.userid);

    User.findOne({
            id: info.userid
        }, {
            '_id': 1 ,
            'id': 1,
            'username': 1,
            'sex': 1,
            'age': 1,
            'profession': 1,
            'grade': 1,
            'class': 1
        }, function (err, doc) {
            if(err) {
                console.log('查询失败');
                return;
            }
            doc = JSON.parse(JSON.stringify(doc));
            console.log(doc);
            callback({
                data: doc,
                result: true,
                msg: "获取用户成功"
            });
        });

};

userDao.prototype.getUserClass = function(info, callback) {
    console.log('query user class, userid:', info.userid);

    User.findOne({
            id: info.userid
        }, {
            '_id': 1 ,
            'id': 1,
            'signup': 1
        }, function (err, doc) {
            if(err) {
                console.log('查询失败');
                return;
            }
            doc = JSON.parse(JSON.stringify(doc));
            console.log(doc);
            callback({
                data: doc,
                result: true,
                msg: "获取用户课程成功"
            });
        });

};

module.exports = new userDao();
