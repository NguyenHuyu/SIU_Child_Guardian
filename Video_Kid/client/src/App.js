import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Explore from './pages/Home';
import Video from './pages/Video';
import Search from './pages/Search';
import Subs from './pages/Subs';
import Chat from './pages/Chat';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./index.css"
import { violetTheme, greenTheme } from "./theme/Theme";
const Container = styled.div`
  display: flex;
  
`;

const Main = styled.div`
  flex: 7;
`;


const Wrapper=styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bgmain};
min-height: 100vh;
;`

function App() {
  const [violetMode, setVioletMode] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={violetMode ? violetTheme : greenTheme}>
   <Container>
      <BrowserRouter>
      <Menu violetMode={violetMode} setVioletMode={setVioletMode} ></Menu>
      <Main>
          <Navbar></Navbar>
              <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={currentUser ? <Home type="random" /> : <SignIn/> } />
                  <Route path='explore' element={<Explore type= "random"></Explore>} ></Route>
                  <Route path='search' element={<Search></Search>} ></Route>
                  <Route path='subs' element={<Subs></Subs>} ></Route>
                  <Route path='chat' element={<Chat></Chat>} ></Route>
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
   </ThemeProvider>
  );
}

export default App;
