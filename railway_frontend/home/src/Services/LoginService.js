import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5005";

class LoginService {

    login(formData){
        return axios.post(USER_API_BASE_URL +"/auth", formData);
    }
}

export default new LoginService();