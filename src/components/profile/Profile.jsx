import React from "react";
import classes from "./Profile.module.css";
import Description from "./description/Description";


import DialogsContainer from "./dialogs/DialogsContainer";


const Profile = (props) => {

    return (

        <div className={classes.wrapper}>
           <Description  {...props}/>
           <DialogsContainer  />
        </div>
    )
}

export default Profile;