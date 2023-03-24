import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.container}>
            <div className={s.head}>My posts</div>
            <div className={s.text}>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;