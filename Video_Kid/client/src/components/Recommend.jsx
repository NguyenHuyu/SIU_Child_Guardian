import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardRecommend from "./CardRecommend";

const Container = styled.div`
  flex: 2;
`;

const Recommend = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <CardRecommend type="sm" key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommend;
