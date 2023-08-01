import React from 'react';
import s from "./Messages.module.css";
import {useParams} from "react-router-dom";

const Messages = (props) => {

    const { dialogID} = useParams()

    let _textMessage = '';

    const onMessageChange = () => {
        let message = _textMessage.value;
        props.onMessageChange(message)
    }

    const sendMessage = () => {
        let message = _textMessage.value;
        if (message === '') {
            alert('Поле не может быть пустым')
            return;
        }
        props.addMessage(dialogID)
    }
    const getMessages = (array) => {
        return array
            .filter(x => x.id.toString() === dialogID)[0]?.messages
            .map(message => <div className={s.message}>— {message}</div>)
    }

    return (
        <>
            <div className={s.messages}>
                {getMessages(props.users)}
            </div>
            <div className={s.text}>
                <textarea onChange={onMessageChange} ref={(a) => _textMessage = a}
                          value={props.newMessageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default Messages;