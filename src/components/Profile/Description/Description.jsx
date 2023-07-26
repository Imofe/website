import React from "react";
import s from './Description.module.css';

const Description = (props) => {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src='https://cdn.oneesports.gg/cdn-data/2023/05/Anime_DemonSlayer_MuichiroTokito_MistHashira_2.webp'  alt='аватар'/>
            </div>
            <div className={s.descr}>
                <div className={s.name}>{props.name}</div>
                <div className={s.item}>Date: {props.date}</div>
                <div className={s.item}>City: {props.city}</div>
                <div className={s.item}>Education: {props.education}</div>
                <div className={s.item}>Web Site: {props.site}</div>
            </div>
        </div>
    )
}

export default Description;