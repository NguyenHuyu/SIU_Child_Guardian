import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Video from './pages/Video';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  
`;

const Main = styled.div`
  flex: 7;
`;


const Wrapper=styled.div`
flex: 7;
background-color: #cfcede;
min-height: 100vh;
;`

function App() {
  return (
   <Container>
      <Menu></Menu>
      <Main>
          <Navbar></Navbar>
          <Wrapper></Wrapper>
      </Main>
   </Container>
  );
}

export default App;
