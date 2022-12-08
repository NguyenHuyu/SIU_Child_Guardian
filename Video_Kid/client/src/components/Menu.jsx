import React from "react";
import styled from "styled-components"
import OfficialLogo from "../img/OfficialLogo.png"
import HomeIcon from '@mui/icons-material/Cottage';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//111
const Container = styled.div`
    flex: 1;
    background-color: #6D68A0;
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
    color:#e1ff00;
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

const Menu = ({lightMode,setLightMode}) => {
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
                Home
            </Item>
            </Link>
            <Link to={`/explore`} style={{textDecoration:"none"}}>
            <Item>
                <ExploreIcon/>
                Explore
            </Item>
            </Link>
            <Link to={`/subs`} style={{textDecoration:"none"}}>
            <Item>
                <SubscriptionsIcon/>
                Subscriptions 
            </Item>
            </Link>
            <Hr/>
            <Item>
                <ToggleOffIcon/>
                Chế độ màu
            </Item>
        </Container>
        }
        </>
    )
}

export default Menu;






