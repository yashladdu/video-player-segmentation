import React, { useState } from 'react'
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import axios from "axios";
import Box from '@mui/material/Box';
import Cards from '../components/Card';


const Container = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    backrgroundColor: "red",
  }
}))

const Home = () => {

  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get("https://video-player-backend-g2ot.onrender.com/api/videos/random");
        setVideos(res.data);
      }
      fetchVideos();
    }, []);

  return (
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"3rem"}}>
      <Box sx={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap" , gap:"15px", width:"90%"}}>
        {videos.map((video) => (
          <Cards key={video._id} video={video} />      
        ))}      
      </Box>
    </Container> 
  );
};

export default Home
