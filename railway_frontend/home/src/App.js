import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Traindetails from "./Components/Admin/TrainDetails/Traindetails";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Userdetails from "./Components/Admin/UserDetails/Userdetails";
import CreateTrain from "./Components/Admin/TrainDetails/CreateTrain";
import UserDashboard from "./Components/User/UserDashboard/UserDashboard";
import AllTrainList from "./Components/User/AllTrainList/AllTrainList";
import UserProfile from "./Components/User/UserProfile/UserProfile";
import BookTrain from "./Components/User/BookTrain/BookTrain";
import Payment from "./Components/User/Payment/Payment";
import BookingDetails from "./Components/Admin/BookingDetails/BookingDetails";
// import ETicket from "./Components/User/ETicket/ETicket";
import bookings from "./Components/User/Bookings/bookings";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/traindetails' exact component={Traindetails} />
          <Route path='/userdetails' exact component={Userdetails} />
          <Route path='/createtrain' exact component={CreateTrain} />
          <Route path='/createtrain/:trainid' exact component={CreateTrain} />
          <Route path='/usrdash' exact component={UserDashboard} />
          <Route path='/alltrain' exact component={AllTrainList} />
          <Route path='/profile' exact component={UserProfile} />
          <Route path='/booktrain/:trainid' exact component={BookTrain} />
          <Route path='/pay/:bookingid' exact component={Payment} />
          <Route path='/allbooking' exact component={BookingDetails} />
          {/* <Route path='/eticket' exact component={ETicket} /> */}
          <Route path='/bookings' exact component={bookings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
