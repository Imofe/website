import React from "react";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src={require('../../images/icon.png')} alt='main_photo'></img>
        </header>
    )
}
export default Header;
