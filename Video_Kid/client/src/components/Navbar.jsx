import React from "react";
import styled from "styled-components"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {loginSuccess} from "../redux/userSlice"
import { Link } from "react-router-dom";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #6D68A0;	
  height: 56px;
  z-index:10;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
  margin-right: 10px;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin-left: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 13px;
  width: 100%;
  height: 25px;
  padding-left: 10px;
  ::placeholder{
    color: white;
  }

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border:none;
  color: #e1ff00;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  font-weight: bolder;
  gap: 5px;
  font-size: 14px;
  &:hover{
        background-image: linear-gradient(#ff4000,#ff9500);
        color:#252b00;
        cursor: pointer;    
        box-lines: none;
    }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: white;
  margin-right: 20px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;


const Navbar = () => {
  const navigate=useNavigate();
  const [open,setOpen]=useState(false);
  const [q,setQ]=useState("");
  const {currentUser}=useSelector((state)=>state.user );
  const dispatch=useDispatch()

  const logout=()=>{
  localStorage.removeItem('curentUser')
  localStorage.removeItem('persist:root')
  dispatch(loginSuccess())
  navigate('/signin');
                    }

    
    
    return(
      <>
      <Container>
        <Wrapper>
          {currentUser && <>
            <Search>
            <Input
              placeholder="Tìm kiếm"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchOutlinedIcon onClick={()=>navigate(`/search?q=${q}`)} style={{cursor:"pointer"}} />
          </Search></>}
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} style={{cursor:"pointer",marginRight:"10px"}} /> 
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                ĐĂNG NHẬP
              </Button>
            </Link>
          )}
            {currentUser && <>
              <Button onClick={logout}>
              ĐĂNG XUẤT
            </Button>
            </>
            }
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
     
    </>
    )
}

export default Navbar;






