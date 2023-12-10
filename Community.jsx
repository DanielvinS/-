// 커뮤니티 페이지
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Community.css";
import Write from "./Write";
import Commuitem from "./Commuitem";

function Community(){
  useEffect(()=>{
    const rawData = localStorage.getItem('lists');
    if(!rawData){
      return;
    };
    const localData = JSON.parse(rawData);
    if(localData.length === 0){
      return;
    };
    localData.sort((a,b)=> Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    setLists(localData);
  },[]);
  const [showContent, setShowContent] = useState(false);
  const [lists, setLists] = useState([]);
  const idRef = useRef(0);
  const [search, setSearch] = useState("");

  function onClickWrite(){
    setShowContent(true);
  }
  function onCreate(title, content){
    const newItem = {
      id: idRef.current,
      title,
      content,
      createdDate: new Date().getTime(),
    };
    const newLists = [newItem, ...lists]
    setLists(newLists);
    localStorage.setItem('lists', JSON.stringify(newLists));
    idRef.current += 1;
  }

  function onChangesearch(e){
    setSearch(e.target.value);
  }
  // 공백이면 그대로 , 검색창에 무언가 입력하면 그것과 같은 제목, 내용 검색
  function getSearchResult(){
    return search === ""
    ? lists
    : lists.filter((item) => item.title.includes(search) || item.content.includes(search));
  }
  // 객체.filter( (아이템) => 필터링할 아이템 )
  // 자고 인나서 고쳐야할 기능 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // 수정버튼 클릭한 ID랑 같은 ID일때 수정하고, 아닐땐 그대로 ?
  function onUpdate(targetId, changetitle, changecontent){
    const newLists = lists.map((item)=>
    item.id === targetId
      ? {...item, title: changetitle, content: changecontent}
      : item)
    setLists(newLists);
    localStorage.setItem('lists', JSON.stringify(newLists));
  }
  // ? {...item, title: prompt("수정 후 제목 입력"), content: prompt("수정 후 내용 입력")}
  // 위에 코드랑 Commuitem 에 19번째줄 고쳐야함 사실모름 어딜 고쳐야...
  // 삭제를 클릭한 id랑 다른 id들만 가져오는거
  function onDelete(targetId){
    const newLists = lists.filter((item)=>item.id !== targetId);
    setLists(newLists);
    localStorage.setItem('lists', JSON.stringify(newLists));
  }

  return(
    <div className="main_2">
      <div className="main_long_2">
        <Link className="home_link" to={'/login'}><button className="home_btn">Home</button></Link>
        <div className="cmudiv">커뮤니티</div>
      </div>
      <div className="write_div">
        <button className="write_btn" onClick={onClickWrite}>글쓰기</button>
        {showContent && <Write setShowContent={setShowContent} onCreate={onCreate}></Write>}
        {/* showContent기본값이 거짓인데 참이되면 Write 실행됨 */}
        {/* 이 기능 천재적이다  */}

        <div>
          <input value={search} onChange={onChangesearch} className="input_search" placeholder="검색할 글의 제목이나 내용 입력" />
        </div>

        {/* lists안에 있는거 값을 Commuitem로 넘김 */}
        <div>
          {/* {lists.map((item)=>( */}
          {getSearchResult().map((item)=>(
            <Commuitem onCreate={onCreate} onUpdate={onUpdate} onDelete={onDelete} key={item.id} {...item}></Commuitem>
          ))}
        </div>
        {/* <div>
          <input className="input_search" placeholder="검색할 글의 제목이나 내용 입력" />
        </div> */}
        {/* <Commuitem></Commuitem> */}
        {/* 위에 이게 제목,내용 수정 삭제 잇는 그거 */}
      </div>
    </div>
  );
}

export default Community;