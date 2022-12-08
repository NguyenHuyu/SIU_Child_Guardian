
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const WrapperCard=styled.a`
  display: flex;
  width:270px;
  min-height: 180px;
  border-radius: 20px;
  background-color: #514c88;
  flex-direction: column;
  word-wrap: break-word;
  padding-bottom: 1.5vh;
  text-decoration: none;
  color: white;
  font-family: 'Comfortaa', cursive;
  margin:30px 14px 14px 14px;
  box-shadow: 1px 1px 1px 1px #45407d;

  :hover{
    opacity: 0.8;
  }
  cursor: pointer;


`
const Image= styled.img`
  width: 270px;
  height: 120px;
  border-radius: 20px 20px 0 0;
`
const Imgavt=styled.img`
  width: 6vh;
  height: 6vh;
  border-radius: 50px; 
  margin-top: 10px;
  margin-left: 10px;
`

const Title=styled.p`
  /* margin: top right bottom left */
  font-size: 16px;
  font-weight: bolder;
  margin:10px 0px 10px 0px ;
`
const Spandetails=styled.span`
  font-size: 15px;
`



const Card = ({type,video}) => {
  const [channel,setChannel]=useState({});

  useEffect(()=>{
   const fetchChannel=async()=>{
   const res=await axios.get(`/users/find/${video.userId}`);
   setChannel(res.data);
   };
   fetchChannel();

  },[video.userId]);
  
  return (
 
    <Link to={`/Video/${video._id}`} style={{textDecoration:"none"}} >
    <WrapperCard type={type}>    
          <nav>
              <Image type={type} src={video.imgUrl}></Image>
          </nav>
          <nav style={{display:"flex"}}>
              <Imgavt type={type} src={channel?.img}></Imgavt>
              <nav style={{display:"flex",flexDirection:"column",marginLeft:"10px"}} >
              <Title>{video.title}</Title>
              <Spandetails>{channel?.name}</Spandetails>
              </nav>
          </nav>
    </WrapperCard>
    </Link>
   
  )
}

export default Card
