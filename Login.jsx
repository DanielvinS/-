// 로그인 후 메인화면 
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import cat from './img/cat.jpg';
import Frog from './img/Frog.jpg';

function Login(){
  return(
    <div className="main">
      <div className="main_long">
        동서대학교 소프트웨어융합대학
      </div>
    <div className="all">
    
  <div className="Login">
    <div className="input">
      반갑습니다<br/>
      HJ님!
    </div>
      <Link to={'/login'} className="link">
    <div className="Loginbtn">
      <button className="logout_btn"><Link to={'/'} className="link_logout">로그아웃</Link></button>
    </div>
  </Link>

  <div className="container_1">
    <div className="container_1_btn"><Link className="link" to={'/introduction'}>학과 소개</Link></div>
      <div className="container_1_btn"><Link className="link" to={'/career'}>진로, 취업</Link></div>
      <div className="container_1_btn"><Link className="link" to={'/community'}>커뮤니티</Link></div>
    </div>
  </div>

  <div className="container_2">
    <div className="anything">
      <a target="_blank" className="play" href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted">고양이랑 놀러가기</a>
      <a target="_blank" className="play" href="https://flexboxfroggy.com/#ko">개구리랑 놀러가기</a>
      <a target="_blank" className="play" href="https://school.programmers.co.kr/learn/challenges?order=acceptance_desc">영어랑 놀러가기</a>
    </div>
      <div div className="img">
        <img src={cat} />
        <img src={Frog} />
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;