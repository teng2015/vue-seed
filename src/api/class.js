import request from '../utils/ajax';

export default {
    classList () {
        return request.get('/classList');
    },
    classDetail (id) {
        return request.get(`/classDetail/${id}`);
    }
};
