import React from 'react';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState();
    const onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    const addMessage = (id) => {
        props.store.dispatch(addMessageActionCreator(id))
    }

    return (
        <Messages addMessage={addMessage}
                  onMessageChange={onMessageChange}
                  users={state.dialogsPage.users}
                  newMessageText={state.dialogsPage.newMessageText}/>
    );
};

export default MessagesContainer;