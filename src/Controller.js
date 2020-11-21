import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./screens/home/Home";

class Controller extends Component {

    constructor(){
        super();
        this.baseUrl= "http://localhost:8080/api";
    }

    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" render={props=> <Home {...props} baseUrl={this.baseUrl}/>}/>
                </Router>
            </div>
        );
    }

}
export default Controller;
