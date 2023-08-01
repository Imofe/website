const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    users: [
        {id: 1, name: 'Bertold', messages: ['Как дела?', 'Чем занимаешься?', 'Кд чд кд пон пк']},
        {id: 2, name: 'Eren', messages: ['Пока', 'Созвонимся завтра']},
        {id: 3, name: 'Rainer', messages: ['Прив', 'Я бронированный', 'А он колосальный', 'ЧТООООО?????']},
        {id: 4, name: 'Nezuko', messages: ['Мне впадлу с тобой разговаривать']},
        {id: 5, name: 'Muichiro', messages: ['месси месси анкара месси', 'голь голь голь голь голь']},
        {id: 6, name: 'Rengoku', messages: ['Бей меня', 'быстрее скорости света', 'just wanna die']}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
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