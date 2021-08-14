import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="headleft">
                <MenuIcon/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
            </div>
            <div className="middle">
                <input placeholder='Search' type="text"/>
                <button><SearchIcon/></button>

            </div>
            <div className="headright">
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationsIcon/>
            </div>
        </div>
    )
}

export default Header
