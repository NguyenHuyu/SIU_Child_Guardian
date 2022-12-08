import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #6d68a0;
  border: 1px solid #000;
  padding: 20px 50px;
  gap: 10px;
  box-shadow: 2px 2px 2px 2px #00454a;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  background-color: #000;;
  width: 100%;
  color: #ffffff;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 15px 15px;
    color:#313800;
    gap: 10px;
    font-weight: bolder;
    margin: 20px 25px;
    border: 1px solid #430101;
    &:hover{
        background-image: linear-gradient(#d9ff00,#0ed700);
        color:#252b00;
        cursor: pointer;    
        box-lines: none;
    }
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: bolder;
  font-size: 12px;
`;

const Team = styled.div`
  margin-left: 250px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password});
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
      alert("Sai tài khoản hoặc mật khẩu !");
    }
  };



  return (
    <Container>
      <Wrapper>
        <Title>Đăng nhập</Title>
        <SubTitle>để kết nối ChildGuardian</SubTitle>
        <Input
          placeholder="Tên đăng nhập"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>
          Let's Go
          <ArrowForwardIcon/>
        </Button>
      </Wrapper>
      <More>
        <Team>New Seed</Team>
      </More>
    </Container>
  );
}

export default SignIn
