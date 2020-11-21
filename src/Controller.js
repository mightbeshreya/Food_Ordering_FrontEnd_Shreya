import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './common/Header';

class Controller extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" render={()=><Header/>}/>
                </Router>
            </div>
        );
    }

}
export default Controller;
