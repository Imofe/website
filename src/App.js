import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile profilePage={props.state.profilePage}
                                                          dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/:dialogID' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                           dispatch={props.dispatch}/>}/>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
