import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src={require('../../../../images/checked.png')} alt='avatarka'></img>
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