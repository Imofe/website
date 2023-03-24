import React from "react";
import s from './Description.module.css'

const Description = (props) => {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src='https://wewatch.gg/static/media/99/9c/5f/e44f4bd9cae005144d825bcb73.jpg?v=1584473910291'></img>
            </div>
            <div className={s.descr}>
                <div className={s.name}>{props.name}</div>
                <div className={s.date}>Date: {props.date}</div> 
                <div className={s.city}>City: {props.city}</div>
                <div className={s.education}>Education: {props.education}</div>
                <div className={s.site}>Web Site: {props.site}</div>
            </div>
        </div>
    )
}

export default Description;