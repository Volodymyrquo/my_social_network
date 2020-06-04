import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import MessagesItems from "./messages/MessagesItems";
import classes from "./Dialogs.module.css";


const Dialogs = (props) => {



           let dialogsItem = props.state.dialogs.map(el =>  <DialogItem key={el.id} id={el.id} name={el.name}/>);
        let postsItem = props.state.posts.map(el =>  <MessagesItems key={el.id} id={el.id} message={el.message}/> );

    return (


        <div className={classes.dialogs}>

            <div>{dialogsItem}</div>
            <div>{postsItem}</div>
        </div>

    );
}

export default Dialogs;