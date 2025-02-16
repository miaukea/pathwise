import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the import path as necessary

const App = () => {
return (
    <Router>
    <Navbar />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
    </Router>
);
};

export default App;

