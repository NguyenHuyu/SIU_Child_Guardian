import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Explore from './pages/Home';
import Video from './pages/Video';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./index.css"
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
  
  const { currentUser } = useSelector((state) => state.user);
  return (
   <Container>
      <BrowserRouter>
      <Menu></Menu>
      <Main>
          <Navbar></Navbar>
              <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={currentUser ? <Home type="random" /> : <SignIn/> } />
                  <Route path='explore' element={<Explore type= "random"/>} ></Route>
                  <Route path='search' element={<Search></Search>} ></Route>
                  <Route
                    path="signin"
                    element={ <SignIn />}
                  />
                   <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
              </Wrapper>
      </Main>
      </BrowserRouter>
   </Container>
  );
}

export default App;
