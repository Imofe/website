import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Как тут замечательно!', likesCount: 228},
                {id: 2, message: 'Какое счастье!', likesCount: 1},
                {id: 3, message: 'Как твои дела?', likesCount: 337},
                {id: 4, message: 'Люблю онигири.', likesCount: 25},
            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Bertold', messages: ['Как дела?', 'Чем занимаешься?', 'Кд чд кд пон пк']},
                {id: 2, name: 'Eren', messages: ['Пока', 'Созвонимся завтра']},
                {id: 3, name: 'Rainer', messages: ['Прив', 'Я бронированный', 'А он колосальный', 'ЧТООООО?????']},
                {id: 4, name: 'Nezuko', messages: ['Мне впадлу с тобой разговаривать']},
                {id: 5, name: 'Muichiro', messages: ['месси месси анкара месси', 'голь голь голь голь голь']},
                {id: 6, name: 'Rengoku', messages: ['Бей меня', 'быстрее скорости света', 'just wanna die']}
            ],
            newMessageText: ''
        }

    },
    _callSubscriber()  {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;      // паттерн observer
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}
