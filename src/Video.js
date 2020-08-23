import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video(
    {url,channel,description,song,likes,messages,shares}
){
    
    const [playing, setPlay] =useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlay(false)
        }
        else{
            videoRef.current.play()
            setPlay(true)
        }
    };
    /*const [like, setLike] =useState(false);
    const likeRef = useRef(null);
    const onVideoDoublePress = () =>{
        if(like){
            likeRef.current.liked()
            setLike(false)
        }
        else{
            likeRef.current.like()
            setLike(true)
        }*/
    return(
        <div className="video">
            <video className="video__player" 
            ref={videoRef/*likeRef**/} 
            loop /*onDoubleClick={onVideoDoublePress}*/
            onClick={onVideoPress} src={url}
            />
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    );
}

export default Video;