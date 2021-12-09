/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

let text = "link move test";
let _page = 80;
let arr = [
  {
    idx: "",
    postTitle: "",
    postContents: "",
  }
]

for(let i = 1; i < _page; i++) {
  arr.push([
    {
      idx: `${i}`,
      postTitle: "우왕 ㅋ굳ㅋ",
      postContents: "123",
    }
  ])
}

// console.log(arr);

//버튼에 따른 필터 뿌리기... 내일 해보자
let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
console.log(boardCount);

let nowPage = 0;

document.getElementsByClassName('mainTitle')[0].innerText = text;

// for(let i = 0; i < Math.ceil(arr.idx.length / 5); i++) {

arr.shift(); //초기 하나 뺴주기

let superArr = [];
let arrEl = "";

let obj = {
  idx: [],
  postTitle: [],
  postContents: [],
}

let displayBoardNum = 10; //! 한 화면에 보여주는 게시글 갯수
let displayButtonNum = 5; //! 한 화면에 보여주는 하단 버튼의 갯수
let maxPage = Math.ceil(_page / 5); 

while(arr.length > 0) {  
  for(let j = 0; j < displayBoardNum; j++) {
    if(arr.length !== 0) {
      arrEl = arr.shift(); // 5번 빠진걸

      obj.idx.push(arrEl[0].idx);
      obj.postTitle.push(arrEl[0].postTitle);
      obj.postContents.push(arrEl[0].postContents);
    }
    
  }
  // console.log(arrEl[0]);

  superArr.push(obj);
  obj = {
    idx: [],
    postTitle: [],
    postContents: [],
  }
}

// console.log(obj); 

// console.log(arr);
console.log("🚀 superArr", superArr);

let appendTest = document.getElementsByClassName('lastName')[0];
var trTest = document.createElement('tr');

let pageBtn = document.getElementsByClassName('pageBtn')[0];
let firstMoveBtn = document.createElement('button');
firstMoveBtn.textContent = "<<";
firstMoveBtn.onclick =  test;
firstMoveBtn.className = 'firstMoveBtn';

let leftMoveBtn = document.createElement('button');
leftMoveBtn.textContent = "<";
leftMoveBtn.onclick = left;
leftMoveBtn.className = 'left';

let rightMoveBtn = document.createElement('button');
rightMoveBtn.textContent = ">";
rightMoveBtn.onclick = right;
rightMoveBtn.className = "right";

let lastMoveBtn = document.createElement('button');
lastMoveBtn.textContent = ">>";
lastMoveBtn.onclick = test2;
lastMoveBtn.className = 'lastMoveBtn';

let pagingArr = [];
let check = 1;

//! button 출력 부분

pageBtn.append(firstMoveBtn);
pageBtn.append(leftMoveBtn);

let pageNum = 0;
console.log("🚀 maxPage", maxPage);

let buttonArr = [];



while(superArr.length > pageNum) {
  var pBtn = document.createElement('button');
  pBtn.className = 'buttonGap'; //^^;;
  pageNum++;
  pBtn.classList.add(`button${pageNum}`);
  pBtn.textContent = pageNum;
  pageBtn.append(pBtn);
}
/*
* 일단 버튼 Arr에 8개는 들어온다.
* 첫 화면에 5개 이하일시 그 갯수가 그냥 뿌려줘야 한다.
* "다음" 버튼을 눌러서 현재 페에지가 6이상이 되면 다음 리스트 5개를 뿌려준다(적으면 적은대로)
*/

//* 이것도 그냥 기존 배열 다 지우고 다시 뿌려야 할듯?
// const removeAll_td = document.querySelectorAll('td'); 

pageBtn.append(rightMoveBtn);
pageBtn.append(lastMoveBtn);

const removeAll_button = document.getElementsByClassName('buttonGap');
let tempArr = [];
for(let i = 0; i <removeAll_button.length; i++) {
  tempArr.push(removeAll_button[i]);
}
console.log(tempArr);
tempArr.forEach(function(el){
  el.remove();
})


superArr[0].idx.forEach((el, idx) => {
  var trTest = document.createElement('tr');
  var tdNum = document.createElement('td');
  var tdContents = document.createElement('td');
  var tdTitle = document.createElement('td');

  tdNum.textContent = el;
  tdContents.textContent = superArr[0].postTitle[idx];
  tdTitle.textContent = superArr[0].postContents[idx];

  trTest.append(tdNum);
  trTest.append(tdContents);
  trTest.append(tdTitle);

  appendTest.append(trTest);

})

for(let i = 0; i <= maxPage; i++) {
  // console.log(i);
  document.getElementsByClassName(`button${i + 1}`)[0].addEventListener("click", function(){
    console.log(`${i + 1}번 클릭`);
    nowPage = i + 1;
    console.log(nowPage);
    const removeAll_td = document.querySelectorAll('td'); 
    removeAll_td.forEach(function(el){
      el.remove();
    })
    superArr[i].idx.forEach((el, idx) => {
      var trTest = document.createElement('tr');
      var tdNum = document.createElement('td');
      var tdContents = document.createElement('td');
      var tdTitle = document.createElement('td');
    
      tdNum.textContent = el;
      tdContents.textContent = superArr[i].postTitle[idx];
      tdTitle.textContent = superArr[i].postContents[idx];
    
      trTest.append(tdNum);
      trTest.append(tdContents);
      trTest.append(tdTitle);
    
      appendTest.append(trTest);
    
    })
  });
}

function test() {
  console.log("처음으로 이동");
  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })
  superArr[0].idx.forEach((el, idx) => {
    var trTest = document.createElement('tr');
    var tdNum = document.createElement('td');
    var tdContents = document.createElement('td');
    var tdTitle = document.createElement('td');
  
    tdNum.textContent = el;
    tdContents.textContent = superArr[0].postTitle[idx];
    tdTitle.textContent = superArr[0].postContents[idx];
  
    trTest.append(tdNum);
    trTest.append(tdContents);
    trTest.append(tdTitle);
  
    appendTest.append(trTest);
  
  })
  nowPage = 1;
  console.log(nowPage);
}

function test2() {
  console.log("마지막 이동");
  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })
  superArr[superArr.length - 1].idx.forEach((el, idx) => {
    var trTest = document.createElement('tr');
    var tdNum = document.createElement('td');
    var tdContents = document.createElement('td');
    var tdTitle = document.createElement('td');
  
    tdNum.textContent = el;
    tdContents.textContent = superArr[superArr.length - 1].postTitle[idx];
    tdTitle.textContent = superArr[superArr.length - 1].postContents[idx];
  
    trTest.append(tdNum);
    trTest.append(tdContents);
    trTest.append(tdTitle);
  
    appendTest.append(trTest);
  
  })
  nowPage = superArr.length - 1;
  console.log(nowPage);

}


function left() {
  console.log("left");
  if(nowPage <= 1) {
    nowPage = 1;
  } else {
    nowPage--;
  }

  console.log(nowPage);

  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })

  superArr[nowPage - 1].idx.forEach((el, idx) => {
    var trTest = document.createElement('tr');
    var tdNum = document.createElement('td');
    var tdContents = document.createElement('td');
    var tdTitle = document.createElement('td');
  
    tdNum.textContent = el;
    tdContents.textContent = superArr[nowPage - 1].postTitle[idx];
    tdTitle.textContent = superArr[nowPage - 1].postContents[idx];
  
    trTest.append(tdNum);
    trTest.append(tdContents);
    trTest.append(tdTitle);
  
    appendTest.append(trTest);
  
  })
}

function right() {
  console.log("right");

  if(nowPage >= superArr.length - 1) {
    nowPage = superArr.length;
    // console.log(nowPage)
  } else {
    nowPage++;
  }

  console.log(nowPage);

  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })
  superArr[nowPage - 1].idx.forEach((el, idx) => {
    var trTest = document.createElement('tr');
    var tdNum = document.createElement('td');
    var tdContents = document.createElement('td');
    var tdTitle = document.createElement('td');
  
    tdNum.textContent = el;
    tdContents.textContent = superArr[nowPage - 1].postTitle[idx];
    tdTitle.textContent = superArr[nowPage - 1].postContents[idx];
  
    trTest.append(tdNum);
    trTest.append(tdContents);
    trTest.append(tdTitle);
  
    appendTest.append(trTest);
  
  })
}

// document.getElementsByClassName('firstMoveBtn')[0].addEventListener("click", function(){
//   console.log("click f");
//   const removeAll_td = document.querySelectorAll('td'); 
//   removeAll_td.forEach(function(el){
//     el.remove();
//   })
// })

// document.getElementsByClassName('lastMoveBtn')[0].addEventListener("click", function(){
//   console.log("click l");
//   const removeAll_td = document.querySelectorAll('td'); 
//   removeAll_td.forEach(function(el){
//     el.remove();
//   })
// })



//-------------------------------------------------------------------------------------
// window.addEventListener('DOMContentLoaded', () => {
//     let scrollPos = 0;
//     const mainNav = document.getElementById('mainNav');
//     const headerHeight = mainNav.clientHeight;
//     window.addEventListener('scroll', function() {
//         const currentTop = document.body.getBoundingClientRect().top * -1;
//         if ( currentTop < scrollPos) {
//             // Scrolling Up
//             if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-visible');
//             } else {
//                 console.log(123);
//                 mainNav.classList.remove('is-visible', 'is-fixed');
//             }
//         } else {
//             // Scrolling Down
//             mainNav.classList.remove(['is-visible']);
//             if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-fixed');
//             }
//         }
//         scrollPos = currentTop;
//     });
// })
