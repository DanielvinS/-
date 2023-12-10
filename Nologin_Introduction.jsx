// 학과 소개 페이지
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

function Nologin_Introduction(){
  return(
    <div className="main_1">
      <div className="main_long_1">
        <Link className="home_link" to={'/'}><button className="home_btn">Home</button></Link>
        <div className="l_mg_1">학과 소개</div>
        </div>

      <div className="middle">
        <a className="a_title" href="https://uni.dongseo.ac.kr/software/index.php?pCode=intro_01" target="_blank">소프트웨어융합대학 한눈에 보기</a><br/>
        <div className="move">↑ 클릭 시 이동 ↓</div>
        <div>
          <ul>
            <li className="li"><a href="https://uni.dongseo.ac.kr/sw/" target="_blank">소프트웨어학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ictsecurity/" target="_blank">정보보안학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ai/" target="_blank">인공지능응용학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/computereng/" target="_blank">컴퓨터공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ee/" target="_blank">전자공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/mechatronics/" target="_blank">기계공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/archiengine/" target="_blank">건축공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/civilengine/" target="_blank">토목공학과</a></li>
          </ul>
        </div>
        {/* <Link to={"/"}><div className="backbtn"><button className="back">뒤로가기</button></div></Link> */}
      </div>
    </div>
  );
}

export default Nologin_Introduction;