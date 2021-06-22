import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
import { createContext, useState } from "react";
import AboutUs from "./Component/AboutUs/AboutUs";
import CustomizeOrder from "./Component/CustomizeOrder/CustomizeOrder";
import Shop from "./Component/Shop/Shop";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Review from "./Component/Review/Review";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [name, setName] = useState("user");

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn, name, setName]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/customized">
            <CustomizeOrder></CustomizeOrder>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route>
            <Shop path="/shop"></Shop>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
