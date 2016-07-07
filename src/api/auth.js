import request from '../utils/ajax';

export default {
    login (username, password) {
        return request.post('/login', {
            data: {
                username,
                password
            }
        });
    }
};
