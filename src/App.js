import React from "react";
import Product from "./Product";
import Navbar from './Navbar'
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProducts from "./AddProducts";
import EditProductsList from "./EditProductsList";
import EditForm from "./EditForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Product />
          </Route>
          <Route path="/addproducts">
            <AddProducts />
          </Route>
          <Route path="/editproductslist">
            <EditProductsList />
          </Route>
          <Route path="/editproducts/:id">
            <EditForm />
          </Route>
          <Route path='**'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
