import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios";


const Container=styled.div`
display: flex;
flex-wrap: wrap;
margin-top: -5px;
`
const Explore = ({type}) => {
  
  const [Videos,setVideos]=useState([]);

  useEffect(()=>{
      const fetchVideos=async() =>{
        const res=await axios.get(`/videos/${type}`);
        setVideos(res.data);
      };
      fetchVideos();
    },[type]);

  
  
  return (
    <div>
    <Container>
      {Videos.map((video)=>(<Card key={video._id} video={video} ></Card> ) )}
    </Container>
    </div>
  )
}

export default Explore
