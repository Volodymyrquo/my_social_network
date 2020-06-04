import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {Route} from "react-router-dom";
import Messages from "./components/Messages";
import People from "./components/People";
import UsersContainer from "./components/profile/description/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";


const App = (props) => {

    return (

            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="content-wrapper">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/messages" render={() => <Messages/>}/>
                    <Route path="/people" render={() => <People/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login />}/>
                </div>
            </div>


    );
}

export default App;
