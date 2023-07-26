import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png' alt='avatarka'></img>
            </div>
            <div className={s.description}>
                {props.message}
                <br/>
                <span>Like:</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;