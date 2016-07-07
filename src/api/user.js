import request from '../utils/ajax';

export default {
    getUser (id) {
        return request.get(`/getUser/${id}`);
    }
};
