module.exports = {
    template: require('./template.html'),
    replace: true,
    data: {},
    components: {
        'app-nav': require('../../components/nav'),
        'app-content': require('../../components/content')
    }
}
