import React, { Component } from 'react';
import Header from '../../common/Header';
import { withStyles } from "@material-ui/core/styles";
import './Home.css';
import Grid from '@material-ui/core/Grid';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import 'font-awesome/css/font-awesome.min.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            allRestaurantsDetails: []
        }
    }

    componentDidMount() {
        this.getAllRestaurantsApiHandler();
    }

    getAllRestaurantsApiHandler = () => {
        const apiUrl = this.props.baseUrl + "/restaurant";
        const that = this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET',apiUrl);
        xhr.send();
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("Get All Restaurants DONE");
                    console.log(this.responseText);
                    that.setState(
                        {
                            allRestaurantsDetails: JSON.parse(this.responseText).restaurants
                        }
                    );
                }
            }
        });
    };

    render() {
        return(
            <div>
                <Header baseUrl={this.props.baseUrl} />
                <div className="all-restaurants">
                    {
                        (this.state.allRestaurantsDetails).map((restaurantDetails, index) =>
                            <div key={"div" + index} className="restaurantCard">
                                <Grid key={index}>
                                    <Card style={{width:"95%",height:"95%"}} key={index}>
                                        <CardMedia
                                            component="img"
                                            alt={restaurantDetails.restaurant_name}
                                            height="160"
                                            image={restaurantDetails.photo_URL}
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h6" >
                                                {restaurantDetails.restaurant_name}
                                            </Typography>
                                            <div><br/>
                                                <Typography style={{height:"18px",display:"block"}}>
                                                    {restaurantDetails.categories}
                                                </Typography>
                                            </div>
                                            <br/><br/>
                                        </CardContent>
                                        <div className="rating-container">
                                            <div className="rating-star">
                                                <span><i className="fa fa-star"></i></span>
                                                <span> {restaurantDetails.customer_rating} ({restaurantDetails.number_customers_rated})</span>
                                            </div>
                                            <div className="avg-price-container">
                                                <span><i className="fa fa-inr"></i><span style={{fontSize:"100%",fontWeight:"bold"}}>{restaurantDetails.average_price} for two </span></span>
                                            </div>
                                        </div>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Home;
