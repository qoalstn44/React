/* eslint-disavle */
import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','남자 바지 추천','남자 맨투맨 추천']);
  let [추천, 추천변경] = useState(0);
  let posts = '강남고기맛집';

 // function 제목바꾸기(){
//    var newArray = [...글제목];
 //   newArray[0] = '여자코트 추천';
 //   글제목변경( newArray );
//  }

  return (
    <div className="App">
      <div className="black-nav">
        <biv>개발 Blog</biv>



      </div>

      <div className='list'>
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 추천변경 (추천 + 1) }}>👍</span> {추천} </h3>
        <p>6월 08일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[1] }</h3>
        <p>6월 09일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[2] }</h3>
        <p>6월 10일 발행</p>
        <hr/>
      </div>
      
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>        
      </div>


      
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>        
  </div>
  )
}
export default App;
