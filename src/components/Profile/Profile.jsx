import React from "react";
import Description from "./Description/Description";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.city}>
                <img src='https://i.pinimg.com/originals/10/db/68/10db68ad6f13b3cc5de36c5af8ebc610.jpg' alt='main_photo'></img>
            </div>
            <Description site='demonslayer.com' name='Muichiro Tokito' date='15.04.1859'
                         city='Tokyo' education='UrFU'/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;
