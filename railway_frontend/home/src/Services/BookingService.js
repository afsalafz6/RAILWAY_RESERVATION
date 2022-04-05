import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:5003/bookingdetails";


class BookingService {

    createBooking(bookingData){
        return axios.post(BOOKING_API_BASE_URL +"/add", bookingData);
    }

    getAllBooking(){
        return axios.get(BOOKING_API_BASE_URL +"/getall");
    }

    getAllBookingbyUser(id){
        return axios.get(BOOKING_API_BASE_URL +"/getbookbyuser/"+ id);
    }

    getBookingById(id){
        return axios.get(BOOKING_API_BASE_URL +"/getbyid/" + id);
    }

    updatePaymentStatus(id){
        console.log("updatePaymentStatus", id);
        return axios.put(BOOKING_API_BASE_URL +"/updatepayment/"+ id);
    }
    updateOrderId(bookingId,orderId){
        console.log("updateOrderId", orderId);
        return axios.put(BOOKING_API_BASE_URL +"/updateorderid/"+ bookingId +"/" + orderId);
    }
    updateTrainSeats(id){
        console.log("updateTrainSeats", id);
        return axios.put(BOOKING_API_BASE_URL +"/updateseats/"+ id);
    }

    cancelBooking(id){
        console.log("cancelBooking", id);
        return axios.put(BOOKING_API_BASE_URL +"/cancelbooking/"+ id);
    }
}

export default new BookingService();