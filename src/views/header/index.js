import request from '../../utils/ajax';
let getTime = () => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes()
    return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m)
},
Header = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            userName: 'Sawyer',
            time: getTime()
        }
    },
    methods: {
        show_detail: function () {
            request.get('/test').then(c => {
                console.log(c);
            });
        }
    },
    ready: function () {
        let self = this
        setInterval(() => {
            self.time = getTime()
        }, 60000)
    }
}

module.exports = Header;
