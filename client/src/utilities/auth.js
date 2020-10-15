import axios from 'axios';
import Cookies from 'js-cookie';

class Auth {
    constructor() {
        this.isAuthenticated = false;
    }

    login(login, password, resolve, reject) {
        axios.post('api/login', {
            login: login,
            password: password
        })
        .then(response => {
            const token = response.data.accessToken;
            Cookies.set('token', token);
            this.isAuthenticated = true;
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    }

    logout(cb) {
        Cookies.remove('token');
        this.isAuthenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.isAuthenticated;
    }
}

export default new Auth();