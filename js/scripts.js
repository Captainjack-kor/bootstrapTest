/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/


let text = "link move test";
let _page = 200;
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
      postTitle: `타이틀${i}`,
      postContents: `내용${i}`,
    }
  ])
}


//버튼에 따른 필터 뿌리기... 내일 해보자
let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
console.log(boardCount);

let nowPage = 1;

document.getElementsByClassName('mainTitle')[0].innerText = text;

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
let maxPage = Math.ceil(_page / displayBoardNum); 

while(arr.length > 0) {  
  for(let j = 0; j < displayBoardNum; j++) {
    if(arr.length !== 0) {
      arrEl = arr.shift(); // 5번 빠진걸

      obj.idx.push(arrEl[0].idx);
      obj.postTitle.push(arrEl[0].postTitle);
      obj.postContents.push(arrEl[0].postContents);
    }
    
  }
  superArr.push(obj);
  obj = {
    idx: [],
    postTitle: [],
    postContents: [],
  }
}

console.log("🚀 superArr", superArr);

let appendTest = document.getElementsByClassName('lastName')[0];
var trTest = document.createElement('tr');
let pageBtn = document.getElementsByClassName('pageBtn')[0];
let pageBtnLArrow = document.getElementsByClassName('pageBtnLArrow')[0];
let pageBtnRArrow = document.getElementsByClassName('pageBtnRArrow')[0];
let firstMoveBtn = document.createElement('button');
firstMoveBtn.textContent = "<<";
firstMoveBtn.onclick =  firstMV;
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
lastMoveBtn.onclick = lastMV;
lastMoveBtn.className = 'lastMoveBtn';

let pagingArr = [];
let check = 1;

//! button 출력 부분

pageBtnLArrow.append(firstMoveBtn);
pageBtnLArrow.append(leftMoveBtn);

let pageNum = 0;
let buttonArr = [];

console.log(superArr);
while(superArr.length > pageNum) {
  var pBtn = document.createElement('button');
  pBtn.className = 'buttonGap'; //^^;;
  pageNum++;
  pBtn.classList.add(`button${pageNum}`);
  pBtn.textContent = pageNum;
  pageBtn.append(pBtn);
}
  const removeAll_button = document.getElementsByClassName('buttonGap');

  let tempArr = [];

  for(let i = 0; i < removeAll_button.length; i++) {
    tempArr.push(removeAll_button[i]);
  }

  let newArr = [];
  while(tempArr.length > 0) {
    let head = tempArr.shift();
    if(newArr.length !== displayButtonNum - 1) {
      newArr.push(head);
      if(tempArr.length === 0) {
        buttonArr.push(newArr);
      }
    } else {
      newArr.push(head);
      buttonArr.push(newArr);
      newArr = [];
    }
  }
  console.log(buttonArr); 

// console.log(tempArr);

setTimeout(function() {
  paging_button_gubun(1);
  setButtonColor(1);
 }, 0);

let paging_button_gubun = async (nowPage) => {
  if(nowPage <= displayButtonNum) {
    const removeAll_button = document.getElementsByClassName('buttonGap');
    let tempArr = [];
    for(let i = 0; i <removeAll_button.length; i++) {
      tempArr.push(removeAll_button[i]);
    }
    // console.log(tempArr);
    tempArr.forEach(function(el){
      el.remove();
    })

    for(let i = 0; i < displayButtonNum; i++) {
      pageBtn.append(buttonArr[0][i]);
    }
  } else {
    let setPage = Math.ceil(nowPage / displayButtonNum);
    const removeAll_button = document.getElementsByClassName('buttonGap');
    let tempArr = [];
    for(let i = 0; i <removeAll_button.length; i++) {
      tempArr.push(removeAll_button[i]);
    }
    tempArr.forEach(function(el){
      el.remove();
    })

    for(let i = 0; i < displayButtonNum; i++) {
      if((buttonArr[setPage - 1][i])) {
        pageBtn.append(buttonArr[setPage - 1][i]);
      }
    }
  }

}

pageBtnRArrow.append(rightMoveBtn);
pageBtnRArrow.append(lastMoveBtn);

/*
* 삭제하는 부분
const removeAll_button = document.getElementsByClassName('buttonGap');
let tempArr = [];
for(let i = 0; i <removeAll_button.length; i++) {
  tempArr.push(removeAll_button[i]);
}
console.log(tempArr);
tempArr.forEach(function(el){
  el.remove();
})
*/

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

function setButtonColor(num) {
  for(let i = 0; i <= maxPage; i++) {
    var init = document.getElementsByClassName(`button${i}`)[0];
    if(init) {
      init.style.backgroundColor = "yellow";
    }
    
  }

  var setTargetColor = document.getElementsByClassName(`button${num}`)[0];
  setTargetColor.style.backgroundColor = "red";
}

for(let i = 0; i <= maxPage; i++) {
  document.getElementsByClassName(`button${i + 1}`)[0].addEventListener("click", function(){
    let init = document.getElementsByClassName(`button${i + 1}`)[0];
    init.style.backgroundColor = "yellow";

    console.log(`${i + 1}번 클릭`);
    nowPage = i + 1;
    console.log(nowPage);
    paging_button_gubun(nowPage);
    setButtonColor(nowPage);

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

function firstMV() {

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
  paging_button_gubun(nowPage);
  setButtonColor(1);
  console.log(nowPage);
}

function lastMV() {

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
  nowPage = superArr.length;
  paging_button_gubun(nowPage);
  setButtonColor(superArr.length);
  console.log(nowPage);
}

function left() {
  if(nowPage <= 1) {
    nowPage = 1;
  } else {
    nowPage--;
  }

  console.log(nowPage);
  paging_button_gubun(nowPage);
  setButtonColor(nowPage);

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
  if(nowPage >= superArr.length - 1) {
    nowPage = superArr.length;
    // console.log(nowPage)
  } else {
    nowPage++;
  }

  console.log(nowPage);

  paging_button_gubun(nowPage);
  setButtonColor(nowPage);

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


