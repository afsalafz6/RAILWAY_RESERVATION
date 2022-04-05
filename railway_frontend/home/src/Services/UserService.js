import axios from 'axios';

// const USER_API_BASE_URL = "http://localhost:5002/user";
const USER_API_BASE_URL = "http://localhost:5005/user";

class UserService {

    getAllUser(){
        return axios.get(USER_API_BASE_URL +"/getall");
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL +"/getbyid/" + id);
    }

    profileUpdate(usrData,id){
        return axios.put(USER_API_BASE_URL +"/update/"+ id, usrData);
    }
}
export default new UserService();