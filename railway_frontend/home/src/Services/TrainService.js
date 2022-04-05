import axios from 'axios';

const TRAIN_API_BASE_URL = "http://localhost:5001/traindetails";


class TrainService {

    trainCreate(trainData){
        return axios.post(TRAIN_API_BASE_URL +"/add", trainData);
    }

    getAllTrain(){
        return axios.get(TRAIN_API_BASE_URL +"/getall");
    }

    deleteTrain(id){
        return axios.delete(TRAIN_API_BASE_URL +"/delete/" + id);
    }

    getTrainById(id){
        return axios.get(TRAIN_API_BASE_URL +"/getbyid/" + id);
    }

    trainUpdate(trainData,id){
        return axios.put(TRAIN_API_BASE_URL +"/update/"+ id, trainData);
    }

    searchTrain(from,to){
        return axios.get(TRAIN_API_BASE_URL +"/search/"+ from + "/"+ to);
    }
}

export default new TrainService();