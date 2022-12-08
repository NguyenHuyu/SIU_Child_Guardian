import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
const Container=styled.div`
display: flex;
flex-wrap: wrap;
margin-top: -5px;
`
const Text=styled.div`
 padding-top:35vh;
 padding-left: 30vw;
 font-size:25px;
`

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);
  var a=videos.length;

  return(
   a!=0?(<Container>{videos.map(video=>(<Card key={video._id} video={video}/>))}</Container>)
   : (<Text>Không tìm thấy kết quả</Text>)
  )
};

export default Search;
