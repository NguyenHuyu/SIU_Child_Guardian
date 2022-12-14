import React from "react";
import styled from "styled-components"
import OfficialLogo from "../img/OfficialLogo.png"
import HomeIcon from '@mui/icons-material/Cottage';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//111
const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgmenu};
    height: 100vh;
    position: sticky;
    top:0;
    left: 0;
    z-index: 10;
`

const Wrapper = styled.div`
    padding: 0px 26px;
`;
const Logo = styled.div`
    &:hover{
        cursor: pointer;
    }
`;
const Img = styled.img`
    height:150px;
    align-items : center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 25px 25px;
    color:${({ theme }) => theme.fontcolor};
    font-family: 'Comfortaa', cursive;
    font-weight: bolder ;
    text-shadow: 0.5px 0.5px 0.5px 0.5px #00454a;
    &:hover{
        background-image: linear-gradient(#ff4000,#ff9500);
        color:#252b00;
        cursor: pointer;    
        box-shadow: 2px 2px 2px 2px #00454a;
    }
`

const Hr = styled.hr`
    margin: 15px 20px;
    border: 1px solid #fff;
`

const Menu = ({ violetMode, setVioletMode }) => {
    const {currentUser} = useSelector((state) => state.user)
    
    return(
        <>
        {currentUser &&
            <Container>
            <Wrapper>
                <Link to={`/`}  >
                <Logo >
                    <Img src={OfficialLogo}/> 
                </Logo>
                </Link>
            </Wrapper>
            <Link to={`/`} style={{textDecoration:"none"}}>
            <Item>
                <HomeIcon/>
                Trang Chủ
            </Item>
            </Link>
            <Link to={`/explore`} style={{textDecoration:"none"}}>
            <Item>
                <ExploreIcon/>
                Khám phá
            </Item>
            </Link>
            <Link to={`/subs`} style={{textDecoration:"none"}}>
            <Item>
                <SubscriptionsIcon/>
                Kênh đăng kí 
            </Item>
            </Link>
            <Hr/>
            <Link to={`/chat`} style={{textDecoration:"none"}}>
            <Item>
                <QuestionAnswerIcon/>
                Trò chuyện 
            </Item>
            </Link>
            <Item onClick={() => setVioletMode(!violetMode)}>
            <ToggleOffIcon></ToggleOffIcon>{violetMode ? "Tím" : "Xanh ngọc"}
            </Item>
           
        </Container>
        }
        </>
    )
}

export default Menu;






