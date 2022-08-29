import React from "react";
import {Paper, Typography} from "@mui/material";


const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div> 
    console.log(video);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={12} style={{ height:'70%'}}>
            <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/> 
               <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography> 
               <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography> 
               <Typography variant="subtitle2">{video.snippet.description}</Typography> 
            </Paper>
        </React.Fragment>
    )
}
export default VideoDetail;