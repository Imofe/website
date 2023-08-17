import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

// const MessagesContainer = (props) => {
//     let state = props.store.getState();
//     const onMessageChange = (message) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(message))
//     }
//
//     const addMessage = (id) => {
//         props.store.dispatch(addMessageActionCreator(id))
//     }
//
//     return (
//         <Messages addMessage={addMessage}
//                   onMessageChange={onMessageChange}
//                   users={state.dialogsPage.users}
//                   newMessageText={state.dialogsPage.newMessageText}/>
//     );
// };

const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        addMessage: (id) => {
            dispatch(addMessageActionCreator(id))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;