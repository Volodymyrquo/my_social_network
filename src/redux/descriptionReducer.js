import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SET_PROFILE = "SET_PROFILE";
const SET_FULL_NAME = "SET_FULL_NAME";
const SET_USER_ID = "SET_USER_ID";

const initialState = {
    dialogs: [
        {id: 1, name: "Andriy"},
        {id: 2, name: "Petro"},
        {id: 3, name: "Oleksa"},
        {id: 4, name: "Pavlo"},
        {id: 5, name: "Maria"},
        {id: 6, name: "Oksana"}
    ],
    posts: [
        {id: 1, message: "Hello everyone"}
    ],
    newPostText: "it-kamasutra.com",
photoLarge: null,
    fullName: null,
    userId:null
}
const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 2,
                message: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ""
            }

        case CHANGE_TEXT:
           return  {...state,
               newPostText: action.text
            }
        case SET_PROFILE:
           return  {...state,
               photoLarge: action.photoLarge
            }
        case SET_FULL_NAME:
           return {
               ...state,
               fullName: action.fullName
           }
        case SET_USER_ID:
           return {
               ...state,
               userId: action.userId
           }

        default:
            return state;
    }

}

export const addPost = () => {
    return ({type: "ADD-POST"});
}
export const addNewText = (text) => {
    return ({type: "CHANGE-TEXT", text});
}
export const setProfile = (photoLarge) => {
    return({type: SET_PROFILE, photoLarge });
}
export const setFullName = (fullName) => {
    return({type: SET_FULL_NAME, fullName });
}
export const setUserId = (userId) => {
    return({type: SET_USER_ID, userId });
}

export const profileSuccess = (Id) => (dispatch) =>{

    usersAPI.getProfile(Id)
        .then(data => {
           dispatch(setProfile(data.photos.large));
            dispatch(setUserId(data.userId));
          dispatch(setFullName(data.fullName));
        })

}

export default descriptionReducer;