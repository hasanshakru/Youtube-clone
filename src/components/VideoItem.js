import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({video, onVideoSelect}) => {
  return (
  <Grid item xs={8} container spacing={1}>
    <Paper style={{ alignItems: 'center', cursor:'pointer'}} onClick= {() => onVideoSelect(video)} >
        <img style={{marginRight: '10px'}} alt= "thumbnail" src={video.snippet.thumbnails.medium.url}/>
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
    </Paper>
  </Grid>
  )
};
export default VideoItem;
