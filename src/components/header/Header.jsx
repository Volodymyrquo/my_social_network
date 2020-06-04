import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src="https://www.kindpng.com/picc/m/77-774122_3d-company-logos-design-free-logo-online-03.png" alt=""/>
            <div className= {classes.loginBlock}>
               {props.isAuth ? props.login: <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;