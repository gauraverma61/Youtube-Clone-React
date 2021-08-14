import React from 'react';
import './Sidebarrow.css';


function Sidebarrow({title,Icon}) {
    return (
        <div className='sidebarrow'>
            <Icon className='sidebaricon'/>
           <h2 className='sidebartitle'>{title} </h2> 
        </div>
    )
}

export default Sidebarrow
