import React from "react";
import classes from "./Description.module.css";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus.jsx"


const Description = (props) => {


        return (
              <div className={classes.wrapper}>
            <img className={classes.img}
                 src="https://i.pinimg.com/originals/75/a4/c2/75a4c2d1dc2dbce3342109e8270ff4f3.jpg"
                 alt="picture of nature"/>
                  <div>
                     <img className={classes.photo} src={ props.photoLarge?props.photoLarge:userPhoto}/>
                  </div>
<div>
    <ProfileStatus status={"Hello my dear friends"}/>
</div>
                  <div>
                      {props.userId}
                  </div>
                  <div>
                      {props.fullName}
                  </div>
            <div>
                <textarea  onChange={(event)=>{props.addNewText(event.target.value)}} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ props.addPost}>Send message</button>
            </div>
        </div>
    )
}

export default Description;