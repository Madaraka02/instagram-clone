import React from 'react';
import './Header.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import Avatar from '@material-ui/core/Avatar';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRbo5MAitpPF6PC5n17Db3g733NW514HUzyQ&usqp=CAU" alt=""/>
            </div>
            <div className="header__middle">
                <input type="text" placeholder="Search"></input>
                <SearchRoundedIcon className="header__searchIcon"/>
            </div>
            <div className="header__right">
                < HomeIcon />
                <TelegramIcon/>
                <FavoriteBorderIcon />
                <Avatar/>
            </div>
            
        </div>
    )
}

export default Header
