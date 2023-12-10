import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Career from "./pages/Career";
import Community from "./pages/Community";
import Introduction from "./pages/Introduction";
import Nologin_Career from "./pages/Nologin_Career";
import Nologin_Introduction from "./pages/Nologin_Introduction";

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/introduction" element={<Introduction></Introduction>}></Route>
        <Route path="/career" element={<Career></Career>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>

        <Route path="/home/introduction" element={<Nologin_Introduction></Nologin_Introduction>}></Route>
        <Route path="/home/career" element={<Nologin_Career></Nologin_Career>}></Route>

      </Routes>
    </div>
  )
}

export default App;