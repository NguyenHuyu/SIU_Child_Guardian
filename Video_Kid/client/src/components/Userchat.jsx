import React from 'react'
import styled from "styled-components";
import OfficialLogo from "../img/OfficialLogo.png"
const Wrapper=styled.div`
flex: 3;
height: 60px;
background-color: #7a76ac;
margin-top: 5px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin-left: 5px;

`
const AvtUser=styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
`
const NameUser=styled.text`
    color: white;
    padding-left: 5px;
`
export const Userchat = () => {
  return (
    <Wrapper>
        <AvtUser src={OfficialLogo} ></AvtUser>
        <NameUser>Tổng đài viên Child Guardian</NameUser>
    </Wrapper>
  )
}
export default Userchat