// 커뮤니티에 글쓰기 버튼 클릭 시 나타나sms 화면
import React, { useRef, useState } from "react";
import "./Write.css";

function Write({onCreate, setShowContent}){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();

  function onChangetitle(e){
    setTitle(e.target.value);
  }
  function onChangecomment(e){
    setContent(e.target.value);
  }
  
  function noSubmit(){
    setShowContent(false);
  }

  // 작성버튼 누르면 showcontent가 다시 거짓으로 바뀌면서 글쓰는 창 사라짐!
  function onSubmit(){
    if(title.length == 0){
      titleRef.current.focus();
    }
    else if(content.length == 0){
      contentRef.current.focus();
    }
    else if(title.length >= 16){
      alert("제목은 최대 16글자까지 작성 가능합니다.");
      titleRef.current.focus();
    }
    else if(content.length >= 54){
      alert("내용은 최대 54글자까지 작성 가능합니다.");
      contentRef.current.focus();
    }
    else{
      setShowContent(false);
      onCreate(title, content);
    }
  }

  function handleEnter(e){  // 엔터키 눌러서 메모 작성하는 기능
    if(e.key === "Enter"){
      if(title.length == 0){
        titleRef.current.focus();
      }
      else if(content.length == 0){
        contentRef.current.focus();
      }
      else if(title.length >= 16){
        alert("제목은 최대 16글자까지 작성 가능합니다.");
        titleRef.current.focus();
      }
      else if(content.length >= 54){
        alert("내용은 최대 54글자까지 작성 가능합니다.");
        contentRef.current.focus();
      }
      else{
        setShowContent(false);
        onCreate(title, content);
      }
    }
  }

  return(
    <div>
      <div className="title_input">
        <input onKeyDown={handleEnter} ref={titleRef} value={title} onChange={onChangetitle} className="up_title" placeholder="제목" />
        <input onKeyDown={handleEnter} ref={contentRef} value={content} onChange={onChangecomment} className="input_margin" placeholder="내용" />
      </div>
      <div className="btns">
        <button onClick={noSubmit} className="end_btn_1">취소</button>
        <button onClick={onSubmit} className="end_btn">작성</button>
      </div>
    </div>
  );
}

export default Write;