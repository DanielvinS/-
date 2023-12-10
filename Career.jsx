// 진로 예측 페이지
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Career(){
  return(
    <div className="main_1">
      <div className="main_long_1">
        <Link className="home_link" to={'/login'}><button className="home_btn">Home</button></Link>
        <div className="l_mg_2">진로, 취업 정보</div>
      </div>
      
      <div className="middle">
        <div className="md_1">소프트웨어융합대학 진로 분야<br/></div>
        <div className="move">↑ 클릭 시 이동 ↓</div>
        <div>
          <ul>
            <li className="li"><a href="https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000065" target="_blank">소프트웨어학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ictsecurity/index.php?pCode=MN2000021" target="_blank">정보보안학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ai/index.php?pCode=MN3000028" target="_blank">인공지능응용학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/computereng/index.php?pCode=MN4000043" target="_blank">컴퓨터공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/ee/index.php?pCode=MN8000027" target="_blank">전자공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/mechatronics/index.php?pCode=MN9000027" target="_blank">기계공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/archiengine/?pCode=MN9000051" target="_blank">건축공학과</a></li>
            <li className="li"><a href="https://uni.dongseo.ac.kr/civilengine/?pCode=job" target="_blank">토목공학과</a></li>
          </ul>
        </div>
        {/* <Link to={"/"}><div className="backbtn"><button className="back">뒤로가기</button></div></Link> */}
      </div>
    </div>
  );
}

export default Career;