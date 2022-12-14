import React from 'react'
import styled from "styled-components"
import lichsuvn from "../img/lichsuvn.png"
import tuduyst from "../img/tuduyst.png"
import kynangsong from "../img/kynangsong.webp"
const Container=styled.div`
display: flex;
justify-content: center;

`
const Wrapper=styled.div`
display: flex;
width: 70vw;
height: 70vh;
background-color: ${({ theme }) => theme.bgmenu};
margin-top: 50px;
`
const WrapperInfo=styled.div`
flex:3;
border: 2px solid black;
`
const WrapperChat=styled.div`
flex:7;
border: 2px solid black;
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
  background-color: white;
  border-color: black;
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
background-color: ${({ theme }) => theme.bgmenu};
margin-top: 5px;
display: flex;
align-items: center;
border-radius: 10px;
margin-left: 5px;
padding-left: 10px;
border: 3px solid black;
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
                      <AvtUser src={kynangsong} ></AvtUser>
                      <NameUser>Kỹ năng sống</NameUser>
                  </He>
                  <He>
                      <AvtUser src={lichsuvn} ></AvtUser>
                      <NameUser>Lịch sử Việt Nam</NameUser>
                  </He>
                  <He>
                      <AvtUser src={tuduyst} ></AvtUser>
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