//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
//import AdminLogin from './Loginpage/Adminlogin';
//import AdminSignup from './Loginpage/AdminSignup';
//import useForm from './Loginpage/useForm';
import Form from './Loginpage/Form';
import Navbar from './NavBar/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyOrder from './pages/MyOrder';
import Logout from './pages/Logout';
function App() {
  return (
    <Router>
    <div className="App">
    <Form />
      <Switch>
      <Redirect to='Navbar'/>
      </Switch>
      <Navbar />
      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/myorder" component={MyOrder}/>
      <Route exact path="/logout" component={Logout}/>
      </Switch>
     {/* <AdminLogin /> */}
    </div>
    </Router>
  );
}

export default App;
