import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}

renderTree();

store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});

reportWebVitals();
