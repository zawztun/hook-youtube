import React from 'react'
import './video_item.css'

const VideoItem = ({video, selectedVideo}) => {
    
    return (
        <div className = 'video-item item' onClick= {()=>selectedVideo(video)}>
            <img alt = {video.id.videoId} src = {video.snippet.thumbnails.medium.url}/>
            <div className = 'header'>
                {video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem
