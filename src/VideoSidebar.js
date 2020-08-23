import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes,shares,messages,lb}){
    const [liked,setLiked]=useState(false);
    //var likes=299;
    liked? likes=likes+1:likes=likes;
    return(
        <div className="video__Sidebar">
            <div className="sidebar__button">
                {liked?(
                    <FavoriteIcon onClick={e=> setLiked(false)}/>
                ):(<FavoriteBorderIcon onClick={e=> setLiked(true)}/>)}
                
                <p>{likes}</p>
            </div>
            <div className="sidebar__button">
                <ChatIcon />
                <p>{messages}</p>
            </div>
            <div className="sidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    );
}
export default VideoSidebar