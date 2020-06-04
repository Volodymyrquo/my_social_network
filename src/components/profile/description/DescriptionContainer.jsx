import React from "react";
import {addNewTextActionCreation, addPostActionCreation} from "../../../redux/descriptionReducer";
import Description from "./Description";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
return {
    newPostText: state.description.newPostText

}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addText: () => {dispatch(addPostActionCreation())},
        addNewText: (something) => {
            let text = something.target.value;
            dispatch(addNewTextActionCreation(text))}
    }
}

const DescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Description);

export default DescriptionContainer;