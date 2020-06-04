import descriptionReducer from "./descriptionReducer";

const store = {

    rerenderApp() {
        return (
            console.log("Hi, how are you.")
        )
    },


    _state: {
        description:{
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
            newPostText: "it-kamasutra.com"

        },
        profile: {
            text: "Profile"
        }
    },

    getState() {

        return this._state;
    },
    subscribe(observer) {
        this.rerenderApp = observer;
    },

    dispatch(action){

        descriptionReducer(this._state.description, action);
        this.rerenderApp(this._state);
    }

}


export default store;