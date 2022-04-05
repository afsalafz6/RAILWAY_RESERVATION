import React, { Component } from 'react';
import BookingService from '../../../Services/BookingService';
import PaymentService from '../../../Services/PaymentService';
import UserNav from '../UserNav/UserNav';
import UserSidebar from '../UserSidebar/UserSidebar';

class Payment extends Component {

    state = {
        bookingid:this.props.match.params.bookingid,
        bookingdetail: {},
        // done:false


      };

    componentDidMount() {
        BookingService.getBookingById(this.state.bookingid).then((res) => {
          console.log("book details", res);
          this.setState({ bookingdetail: res.data });
        });

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
      }

    //   setStatus() { 
    //       console.log(this.state.bookingdetail.id , this.state.bookingid);
    //     BookingService.updatePaymentStatus(this.state.bookingdetail.id)
    //   }

      onSubmit = (e) => {
        e.preventDefault();
        let orderDetail = {"amount":this.state.bookingdetail.totalfare};

        PaymentService.createOrder(orderDetail).then((res) => {
            console.log("PAYMENT ORDER RESPONSE", res);
            BookingService.updateOrderId(this.state.bookingid,res.data.id)
            var newThis=this;
            var options = {
                "key": "rzp_test_qSq0gWHEAQOThF", // Enter the Key ID generated from the Dashboard
                "amount": res.data.amount, 
                "currency": "INR",
                "name": "Railway Reservation",
                "description": "Ticket Reservation",
                // "image": "https://example.com/your_logo",
                "order_id":res.data.id, 
                "handler": function (response){
                    console.log(response);
                    newThis.updatePaymentStatus();
                    alert("Payment Successfull !!!");
                    window.location.href="/bookings";
                },
                "prefill": {
                    "name": "",
                    "email": "qwerty@qqq.com",
                    "contact": ""
                },
                "notes": {
                    "address": "Railway Reservation System"
                },
                "theme": {
                    "color": "#26a69a"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
          });
      };

      updatePaymentStatus(){
            BookingService.updatePaymentStatus(this.state.bookingdetail.id);
            // BookingService.updateTrainSeats(this.state.bookingdetail.id);
      }

    render() {
        return (
            <div>
           <UserNav />
        <UserSidebar />
            <div className="section"></div>
            <main>
              <center>
                <div className="section"></div>
    
                <div className="section"></div>
    
                <div className="container">
                  <div
                    className="z-depth-1 grey lighten-4 row"
                    style={{
                      display: "inline-block",
                      padding: "32px 48px 0px 48px",
                      border: "1px solid #EEE",
                    }}
                  >
                      <h5 className="indigo-text">Please, Pay for Complete Booking</h5>
                    <form className="col s12">
                      <br />
                      <center>
                        <div className="row">
                          <button
                            type="submit"
                            name="btn_login"
                            className="col s12 btn btn-large waves-effect"
                            style={{ backgroundColor: "#26a69a" }}
                            onClick={this.onSubmit}
                          >
                            ₹ {this.state.bookingdetail.totalfare} PAY
                          </button>
                        </div>
                      </center>
                    </form>
                  </div>
                </div>
              </center>
    
              <div className="section"></div>
              <div className="section"></div>
            </main>
          </div>
        );
    }
}

export default Payment;