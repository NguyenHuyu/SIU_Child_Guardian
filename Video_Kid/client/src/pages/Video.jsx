import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {fetchSuccess} from "../redux/videoSlice"
import Recommendation from "../components/Recommend";

const Container = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const Content = styled.div`
  width: 800px;
  margin: 5vh 4vw;
  flex: 8;

`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Comfortaa', cursive;
  font-weight: bolder;
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

const Description = styled.p`
  margin: 10px;
  font-size: 14px;
  font-family: 'Comfortaa', cursive;
  font-weight: bolder ;
`;


const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid #430101;
`

const VideoFrame = styled.video`
  height: 500px;
  width: 100%;

`;

const RecommendWrapper = styled.div`
  margin: 20px;
  flex: 2;
`;

const Video = () => {
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


  //TODO: DELETE VIDEO FUNCTIONALITY

  return (
    <div>
      {currentUser && <>
      <Container>
        <Content>
          <VideoWrapper>
            <VideoFrame src={currentVideo?.videoUrl} controls />
          </VideoWrapper>
          <Title>{currentVideo?.title}</Title>
          <Hr/>
          <Channel>
            <ChannelInfo>
              <ChannelImg src={channel?.img} />
              <ChannelDetail>
                <ChannelName>{channel?.name}</ChannelName>
              </ChannelDetail>
            </ChannelInfo>
          </Channel>
          <Hr/>
        <h3>Mô tả:</h3> <Description>{currentVideo?.desc}</Description>
        </Content>
        <RecommendWrapper>
        <h2>Đề xuất</h2>
        <Recommendation tags={currentVideo?.tags} />
        </RecommendWrapper>
      </Container>
      </>}
    </div>
  );
};

export default Video;
