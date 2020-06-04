import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <div> <NavLink to="/profile"  className={`${classes.profile} ${classes.messages}`} activeClassName={classes.activeLink}>Profile</NavLink> </div>
           <div><NavLink to="/messages" className={classes.messages} activeClassName={classes.activeLink}>Messages</NavLink></div>
           <div><NavLink to="/people" className={classes.messages} activeClassName={classes.activeLink}>People</NavLink></div>
            <div><NavLink to="/users" className={classes.messages} activeClassName={classes.activeLink} >Find Users</NavLink></div>



        </div>
    )
}

export default Navbar;