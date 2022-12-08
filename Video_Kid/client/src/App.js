import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Video from './pages/Video';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import Channels from "./pages/Channels";
import { useState } from "react";
import { Theme1, Theme2 } from "./redux/theme/Theme";


function App() {
  return (
   <div>helo</div>
  );
}

export default App;
