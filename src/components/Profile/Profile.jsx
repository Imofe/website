import React from "react";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.city}>
                <img src='https://i.pinimg.com/originals/10/db/68/10db68ad6f13b3cc5de36c5af8ebc610.jpg'></img>
            </div>
            <Description site='Dota2.com' name='Mr. Pudge' date='77.77.7777'
                         city='Dire' education='URFU Sharaga'/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;
