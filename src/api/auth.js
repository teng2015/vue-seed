import request from '../utils/ajax';

export default {
    login (userid, password) {
        return request.post('/login', {
            data: {
                userid,
                password
            }
        });
    }
};
