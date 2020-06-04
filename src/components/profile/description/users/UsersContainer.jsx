import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
     toggleFollowingProgress,
        unfollow
} from "../../../../redux/usersReducer";
import Users from "./Users";
import preloader from "../../../../assets/images/Spinner-Preloader-Gif/128x128.gif"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);


    }

    render() {

        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow,setCurrentPage,unfollow,toggleFollowingProgress,getUsers})(UsersContainer);













