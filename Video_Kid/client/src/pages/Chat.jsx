import React from 'react'

import styled from "styled-components"
import OfficialLogo from "../img/OfficialLogo.png"
const Container=styled.div`
display: flex;
justify-content: center;

`
const Wrapper=styled.div`
display: flex;
width: 70vw;
height: 70vh;
background-color: #98a0e9;
margin-top: 50px;
`
const WrapperInfo=styled.div`
flex:3;
border: 2px solid #5960a2;
`
const WrapperChat=styled.div`
flex:7;
border: 2px solid #5960a2;
`

const WrapperUser=styled.div``

const wrappertextChat=styled.div`

`
const Button=styled.button`
  width: 40px;
  height: 40px;
  border-radius:50px;
  border: none;
  cursor: pointer;
  background-color: #7878cf;
  box-shadow: 1px 1px 1px 1px #4963bf;
`
const Input=styled.input`
  width: 40vw;
  height: 30px;
  border-radius: 20px;
  padding-left: 10px;
  margin-top: 460px;
  margin-left: 10px;
`
const He=styled.div`
flex: 3;
height: 60px;
background-color: #7a76ac;
margin-top: 5px;
display: flex;
align-items: center;
border-radius: 10px;
margin-left: 5px;
padding-left: 10px;
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

export const Chat = () => {
    return (
    <Container >
        <Wrapper>
            <WrapperInfo>
                    <He>
                      <AvtUser src={OfficialLogo} ></AvtUser>
                      <NameUser>Tổng đài viên Child Guardian</NameUser>
                  </He>
                  <He>
                      <AvtUser src={OfficialLogo} ></AvtUser>
                      <NameUser>Kỹ năng sống</NameUser>
                  </He>
                  <He>
                      <AvtUser src={OfficialLogo} ></AvtUser>
                      <NameUser>Lịch sử Việt Nam</NameUser>
                  </He>
                  <He>
                      <AvtUser src={OfficialLogo} ></AvtUser>
                      <NameUser>Tư duy sáng tạo</NameUser>
                  </He>
                  
               
            </WrapperInfo>
            <WrapperChat>
                <wrappertextChat>
                    <Input placeholder='Nhập tin nhắn' ></Input>
                    <Button>Gửi</Button>
                </wrappertextChat>
            </WrapperChat>
        </Wrapper>
    </Container>
  )
}
export default Chat