import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {



    return (
        <div>
            <NavLink to={props.id}>{props.name}</NavLink>

        </div>
    )
}

export default DialogItem;