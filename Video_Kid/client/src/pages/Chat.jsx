import React from 'react'
import BuildIcon from '@mui/icons-material/Build';
import styled from "styled-components"

const Container=styled.div`
font-size: 20px;
display: flex;
justify-content: center;
padding-top: 20px;
`


export const Chat = () => {
    return (
    <Container >Đang trong quá trình nâng cấp <BuildIcon/></Container>
  )
}
export default Chat