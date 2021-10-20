import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';

function VideoSidebar({ likes, messages, shares }) {
    const [liked, setliked] = useState(false);
    
    return (
        <div className="video__sidebar">
            <div className="video__sidebar__btn">
                {liked ? <FavoriteIcon fontSize="large" 
                onClick= {(e) => setliked(false)} /> : <FavoriteBorderIcon fontSize="large"
                onClick= {(e) => setliked(true)} /> }
                
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="video__sidebar__btn">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="video__sidebar__btn">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
