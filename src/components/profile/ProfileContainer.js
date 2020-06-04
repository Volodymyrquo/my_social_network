import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addNewText, addPost, profileSuccess} from "../../redux/descriptionReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
this.props.profileSuccess(userId);
    }
render() {

return <Profile {...this.props}/>
        }
}

const  mapStateToProps = (state) => ({
    photoLarge: state.description.photoLarge,
    newPostText: state.description.newPostText,
    fullName:state.description.fullName,
    userId:state.description.userId,

})

export default compose (
    connect (mapStateToProps,{addPost,addNewText,profileSuccess}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);

