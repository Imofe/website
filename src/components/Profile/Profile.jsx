import React from "react";
import Description from "./Description/Description";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.city}>
                <img src={require('../../images/header.jpg')} alt='main_photo' />
            </div>
            <Description site='demonslayer.com' name='Muichiro Tokito' date='15.04.1859'
                         city='Tokyo' education='UrFU'/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
