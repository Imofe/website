import React from "react";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.city}>
                <img src='https://i.pinimg.com/originals/10/db/68/10db68ad6f13b3cc5de36c5af8ebc610.jpg' alt='main_photo'></img>
            </div>
            <Description site='demonslayer.com' name='Muichiro Tokito' date='15.04.1859'
                         city='Tokyo' education='UrFU'/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;
