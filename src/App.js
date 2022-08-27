import React, { useState } from "react";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import youtube from "./Api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        q: searchTerm,
      },
    });

    setVideos(response.data.items) 
    setSelectedVideo(response.data.items[0]);
  };
  return (
    <Grid justify="center" container spacing={8}>
      <Grid item xs={12}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
