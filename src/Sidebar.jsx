import React from 'react';
import './Sidebar.css';
import Sidebarrow from './Sidebarrow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Sidebarrow Icon={HomeIcon} title='Home'/>
            <Sidebarrow Icon={WhatshotIcon} title='Trending'/>
            <Sidebarrow Icon={SubscriptionIcon} title='Subscription'/>
            
        </div>
    )
}

export default Sidebar
