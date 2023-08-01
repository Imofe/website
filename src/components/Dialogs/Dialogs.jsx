import React from 'react';
import s from './Dialogs.module.css';
import Users from "./Users/Users";
import {NavLink} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";



const Dialogs = (props) => {

    let state = props.store.getState()

    const users = state.dialogsPage.users.map(d => <Users name={d.name} id={d.id} />)

    return (
        <div>
            <div className={s.head}>
                <NavLink to="/dialogs">DIALOGS</NavLink>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {users}
                </div>
                <div className={s.messages}>
                    <MessagesContainer store={props.store}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;
