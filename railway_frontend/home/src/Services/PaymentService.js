import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:5006/payment";

class PaymentService {

    createOrder(orderData){
        return axios.post(PAYMENT_API_BASE_URL +"/create_order", orderData);
    }
}

export default new PaymentService();