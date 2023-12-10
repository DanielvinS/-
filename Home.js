// 로그인 전 메인화면   어떻게든 로그인을 하고나서 서비스를 이용할 수 있게 만들어야함 방법 찾아야해
// npm install @react-navigation/native  << 이거 터미널에 설치해야 navigation 쓸수있음
import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

import cat from './img/cat.jpg';
import Frog from './img/Frog.jpg';

function Home(){
  const [userid, setUserid] = useState("HJ");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate(); // 로그인 버튼 클릭 시 사용하려고 만듦
  const idRef = useRef();
  const pwRef = useRef();

  function onClickLogin(e){ //아이디가 HJ 이고 비밀번호가 1234일때만 로그인 성공 후 Login.jsx로 이동
    e.preventDefault(); //바로 이동하는거 방지 

    if(userid.length == 0){
      idRef.current.focus();
    }
    else if(password.length == 0){
      pwRef.current.focus();
    }
    else{
      return userid === "HJ" && password === "1234"
      ? navigate("/Login")|| alert(`환영합니다, ${userid}님!`)
      : alert(`아이디 또는 비밀번호가 존재하지 않거나 틀립니다.`)
    }
    // return userid === "HJ" && password === "1234"
    // ? navigate("/Login")|| alert(`환영합니다, ${userid}님!`)
    // : alert(`아이디 또는 비밀번호가 존재하지 않거나 틀립니다.`)
  }

  function handleEnter_1(e){  // 엔터키 눌러서 메모 작성하는 기능
    if(e.key === "Enter"){
      if(userid.length == 0){
        idRef.current.focus();
      }
      else if(password.length == 0){
        pwRef.current.focus();
      }
      else{
        return userid === "HJ" && password === "1234"
        ? navigate("/Login")|| alert(`환영합니다, ${userid}님!`)
        : alert(`아이디 또는 비밀번호가 존재하지 않거나 틀립니다.`)
      }
    }
  }

  function onChangeid(e){ // 아이디 입력할때마다 값을 userid안에 넣는거
    setUserid(e.target.value);
  }
  function onChangepassword(e){ // 비번 입력값 넣기
    setPassword(e.target.value);
  }
  function nologin(){
    alert("로그인 후 이용할 수 있습니다.");
  }
  return(
    <div className="main">
      <div className="main_long">
        동서대학교 소프트웨어융합대학
      </div>

  <div className="all">  
    <div className="Login">
      <div className="input">
        <input onKeyDown={handleEnter_1} ref={idRef} onChange={onChangeid} value={userid} className="Id" type="text" placeholder="아이디"/>
        <div className="blank"></div>
          <input onKeyDown={handleEnter_1} ref={pwRef} onChange={onChangepassword} value={password} className="Pw" type="password" placeholder="비밀번호"/>
        </div>
      <div className="Loginbtn">
    <button onClick={onClickLogin}>로그인</button>
  </div>
  <div className="container_1">
    <div className="container_1_btn"><Link className="link" to={'/home/introduction'}>학과 소개</Link></div>
      <div className="container_1_btn"><Link className="link" to={'/home/career'}>진로, 취업</Link></div>
      <div className="container_1_btn" onClick={nologin}>커뮤니티</div>
    </div>
  </div>

  <div className="container_2">
    <div className="anything">
      <a target="_blank" className="play" href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted">고양이랑 놀러가기</a>
      <a target="_blank" className="play" href="https://flexboxfroggy.com/#ko">개구리랑 놀러가기</a>
    <a target="_blank" className="play" href="https://school.programmers.co.kr/learn/challenges?order=acceptance_desc">영어랑 놀러가기</a>
  </div>

  <div className="img">
    <img src={cat} />
      <img src={Frog} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;