import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png'></img>
                {props.message}
            </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;