import React, { Component } from "react";
import "./Header.css";
import Fastfood from '@material-ui/icons/Fastfood';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    icon: {
        color: '#FFFFFF',
        fontSize: 32,
    },
}

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="page">
                <div className="header-top">
                    <div className="logo">
                        <Fastfood className={classes.icon}/>
                    </div>
                    <div className="search-box">
                        <div className="search-icon">
                            <SearchIcon style={{ color: "#FFFFFF" }} />
                        </div>
                        <Input
                            //onChange={this.props.searchRestaurantsByName.bind(this)}
                            //onChange={this.props.searchRestaurantsByName.bind(this)}
                            //className={classes.searchInput}
                            placeholder="Search by Restaurant Name"
                        />
                    </div>
                    <Button style={{ fontSize: "80%" }} variant="contained" color="default" onClick={this.openModalHandler}><AccountCircle /><span style={{ marginLeft: "2%" }}>Login</span></Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
