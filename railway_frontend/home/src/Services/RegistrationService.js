import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5005";

class RegistrationService {

    userRegistration(userData){
        return axios.post(USER_API_BASE_URL +"/subs", userData);
    }
}

export default new RegistrationService();