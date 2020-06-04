import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png"
import {NavLink} from "react-router-dom";


const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize/5)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return     <div>
<div>
                    {pages.map(p => {
                        return <span className={`${props.currentPage === p && classes.style} ${classes.cursor}`}
                                     onClick={(e) => {
                                        props.onPageChanged(p)
                                     }}>{p}</span>
                    })}

</div>
                {props.users.map(u => <div key={u.id}>
                    <NavLink to={"/profile/" + u.id}>
                    <span>
                        <div><img src={u.photos.small != null?u.photos.small:userPhoto } className={classes.userImg} alt="User photo"/></div>
                        <div>UserID: {u.id}</div>
                        <div>{u.name}</div>
                    </span>
                    </NavLink>
                <span>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>

                </div>)

                }


            </div>


    }

export default Users;