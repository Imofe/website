const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: action.id,
                message: state.newMessageText
            }
            state.users[action.id - 1].messages.push(newMessage.message)
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
    }
    return state;
}

export const addMessageActionCreator = (id) => ({type: ADD_MESSAGE, id: id})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer;