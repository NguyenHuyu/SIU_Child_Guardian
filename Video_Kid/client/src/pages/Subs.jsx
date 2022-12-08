import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import {fetchSuccess} from "../redux/videoSlice"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const Container = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 30vw;
  font-family: 'Comfortaa', cursive;
  font-weight: bolder ;
`;

const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 15px;
  border:2px solid black;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top :15px;
`;

const ChannelName = styled.span`
  font-weight: 500;
  padding-top:5px;
  padding-bottom:5px;

`;

const Subs = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
        <Channel>
            <ChannelInfo>
              <ChannelImg src={channel?.img} />
              <ChannelDetail>
                <ChannelName>{channel?.name}</ChannelName>
              </ChannelDetail>
            </ChannelInfo>
        </Channel>

      {videos.map((video) => (
        <Card type="sm" key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Subs;
