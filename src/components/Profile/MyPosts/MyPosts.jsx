import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let _textElement = '';
    const sendPost = () => {
        let text = _textElement.value;
        if (text === '') {
            alert('Поле не может быть пустым')
            return;
        }
        props.dispatch(addPostActionCreator());
    }

    const onPostChange  = () => {
        let text = _textElement.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.container}>
            <div className={s.head}>My posts</div>
            <div className={s.text}>
                <textarea onChange={onPostChange} ref={(a) => _textElement = a} value={props.newPostText}/>
                <button className={s.button} onClick={sendPost}>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;