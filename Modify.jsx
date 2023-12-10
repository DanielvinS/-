import React, { useRef, useState } from "react";

function Modify({onCreate_1, setModify}){
  const [changetitle, setChangeTitle] = useState("");
  const [changecontent, setChangeContent] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();

  function onChangetitle(e){
    setChangeTitle(e.target.value);
  }
  function onChangecomment(e){
    setChangeContent(e.target.value);
  }
  
  function noSubmit(){
    setModify(false);
  }

  // 작성버튼 누르면 showcontent가 다시 거짓으로 바뀌면서 글쓰는 창 사라짐!!
  function onSubmit(){
    if(changetitle.length == 0){
      titleRef.current.focus();
    }
    else if(changecontent.length == 0){
      contentRef.current.focus();
    }
    else if(changetitle.length >= 16){
      alert("제목은 최대 16글자까지 작성 가능합니다.");
      titleRef.current.focus();
    }
    else if(changecontent.length >= 54){
      alert("내용은 최대 54글자까지 작성 가능합니다.");
      contentRef.current.focus();
    }
    else{
      setModify(false);
      onCreate_1(changetitle, changecontent);
    }
  }

  function handleEnter(e){  // 엔터키 눌러서 메모 작성하는 기능
    if(e.key === "Enter"){
      if(changetitle.length == 0){
        titleRef.current.focus();
      }
      else if(changecontent.length == 0){
        contentRef.current.focus();
      }
      else if(changetitle.length >= 16){
        alert("제목은 최대 16글자까지 작성 가능합니다.");
        titleRef.current.focus();
      }
      else if(changecontent.length >= 54){
        alert("내용은 최대 54글자까지 작성 가능합니다.");
        contentRef.current.focus();
      }
      else{
        setModify(false);
        onCreate_1(changetitle, changecontent);
      }
    }
  }

  return(
    <div>
      <div className="title_input">
        <input onKeyDown={handleEnter} ref={titleRef} value={changetitle} onChange={onChangetitle} className="up_title" placeholder="수정 후 제목" />
        <input onKeyDown={handleEnter} ref={contentRef} value={changecontent} onChange={onChangecomment} className="input_margin" placeholder="수정 후 내용" />
      </div>
      <div className="btns">
        <button onClick={noSubmit} className="end_btn_1">취소</button>
        <button onClick={onSubmit} className="end_btn">완료</button>
      </div>
    </div>
  );
}

export default Modify;