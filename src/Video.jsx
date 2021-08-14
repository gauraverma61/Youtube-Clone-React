import React from 'react';
import './Video.css';
import Avatar from '@material-ui/core/Avatar';

function Video({image,channelimage,title,channel,views,timestamp}) {
    return (
        <div className='video'>
            <img src={image} alt=""/>
            <div className="video_info">
                <Avatar className='video_avatar' src={channelimage}/>
                <div className="text_info">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}  {timestamp} </p>
                </div>

            </div>
            
        </div>
    )
}

export default Video
