// 커뮤니티 밑에 제목 내용 수정 삭제 있는곳
import React, { useState } from "react";
import "./Commuitem.css";
import Modify from "./Modify";

function Commuitem({id, title, content, createdDate, onUpdate, onDelete, onCreate}){
  const [modify, setModify] = useState(false);

  function onChange_title_content(){
    // onUpdate(id);
    // 이게 왜 되는거지.?
    setModify(true);
  }

  // 삭제 기능
  function onClickDelete(){
    onDelete(id);
  }

  // 자고 인나서 고쳐야할 기능 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  function onCreate_1(changetitle, changecontent){
    // onCreate(changetitle, changecontent);
    onUpdate(id, changetitle, changecontent);
  }

  return(
    <div>
      <div className="item_back">
        <div className="item_in">{title}</div>
        <div className="comment">{content}</div>
        <div className="time">{new Date(createdDate).toLocaleString()}</div>
      </div>
      <div className="UDbtns">
        <button onClick={onChange_title_content} className="UD_btn">수정</button>
        <button onClick={onClickDelete} className="UD_btn">삭제</button>
      </div>
      {modify && <Modify setModify={setModify} onCreate_1={onCreate_1}></Modify>}
      {/* <Modify></Modify> */}
    </div>
  );
}

export default Commuitem;