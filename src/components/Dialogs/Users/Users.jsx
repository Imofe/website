import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'
const Users = (props) => {



    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
                </div>
            </div>
        </div>

    );
};

export default Users;