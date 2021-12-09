/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

let text = "link move test";
let arr = [
  {
    idx: "",
    postTitle: "",
    postContents: "",
  }
]

for(let i = 1; i < 10; i++) {
  arr.push([
    {
      idx: `${i}`,
      postTitle: "우왕 ㅋ굳ㅋ",
      postContents: "123",
    }
  ])
}

console.log(arr);
// console.log(arr.length);

// let arr = {
//   idx: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
//   postTitle: ["우왕 ㅋ굳ㅋ", "오징어게임", "안녕", "하이염", "방가방가", "텡", "탕탕탕", "탕탕", "apfjd", "hq", "ggg", "텡", "탕탕탕", "탕탕", "apfjd", "hq", "ggg",  "apfjd", "hq", "ggg"],
//   postContents: ["123", "hi", "aaa", "cc", "bb", "ee", "gg", "124", "7766", "325", "asdadsa"],
// };

//버튼에 따른 필터 뿌리기... 내일 해보자
let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
console.log(boardCount);
let nowPage = 0;
document.getElementsByClassName('mainTitle')[0].innerText = text;


let obj = {
  idx: [],
  postTitle: [],
  postContents: [],
};


// let arr = [
//   {
//     idx: "",
//     postTitle: "",
//     postContents: "",
//   }
// ]


// for(let i = 1; i < 10; i++) {
//   // console.log(i);
//   console.log(arr[i][0]["idx"]);
// }


// for(let i = 0; i < Math.ceil(arr.idx.length / 5); i++) {
// while(arr.length > 0) {  
  //! 한 화면에 보여주는 갯수 "j"  
  // for(let j = 0; j < 5; j++) {
    // arr.shift();
    // if(arr.idx.length !== 0) {
      // obj.idx.push(arr.idx.shift());
    // }
    // if(arr.postTitle.length !== 0) {
      // obj.postTitle.push(arr.postTitle.shift());
    // }
    // if(arr.postContents.length !== 0) {
      // obj.postContents.push(arr.postContents.shift());
    // }
  // }
  // obj = {
  //   idx: [],
  //   postTitle: [],
  //   postContents: [],
  // };
// }

// console.log(arr);
// console.log(superArr);


function pageAlgo(total, bottomSize, listSize, cursor ){
  //total = 총 갯수
  //bottomSize = 하단크기
  //listSize = 화면에서 보여줄 크기
  //cursor = 현재 나의 페이지

  let totalPageSize = Math.ceil(total / listSize)  //한 화면에 보여줄 갯수에서 구한 하단 총 갯수 

  let firstBottomNumber = cursor - cursor % bottomSize + 1;  //하단 최초 숫자
  let lastBottomNumber = cursor - cursor % bottomSize + bottomSize;  //하단 마지막 숫자

  if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize  //총 갯수보다 큰 경우 방지

  return {
      firstBottomNumber,
      lastBottomNumber,
      totalPageSize,
      total,
      bottomSize,
      listSize,
      cursor
  }
}
//280개의 데이터, 하단에는 20개씩, 1개화면에는 10개, 지금 나의페이지는 21
let info = pageAlgo(boardCount, 5, 5, 11);
// console.log(info);

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

pageBtn.append(firstMoveBtn);
pageBtn.append(leftMoveBtn);

let pageNum = 0;
let maxPage = Math.ceil(arr.length / 5);
console.log(arr.length)
let maxPage = arr.length;
// 애초에 올 때 부터 짤라야 하나
while(maxPage > pageNum) {
  var pBtn = document.createElement('button');
  pBtn.className = 'buttonGap'; //^^;;
  pageNum++;
  pBtn.classList.add(`button${pageNum}`);
  pBtn.textContent = pageNum;
  pageBtn.append(pBtn);
}

pageBtn.append(rightMoveBtn);
pageBtn.append(lastMoveBtn);

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

for(let i = 0; i <= 3; i++) {
  // console.log(i);
  document.getElementsByClassName(`button${i + 1}`)[0].addEventListener("click", function(){
    console.log(`${i + 1}번 클릭 @@`);
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
  console.log("hihi");
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
}

function test2() {
  console.log("hihi2");
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
}


function left() {
  console.log("left");
  console.log(nowPage);
  if(nowPage <= 1) {
    nowPage = 1;
  } else {
    nowPage--;
  }
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
  console.log(nowPage);

  if(nowPage >= superArr.length - 1) {
    nowPage = superArr.length;
    // console.log(nowPage)
  } else {
    nowPage++;
  }

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

document.getElementsByClassName('firstMoveBtn')[0].addEventListener("click", function(){
  console.log("click f");
  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })
})

document.getElementsByClassName('lastMoveBtn')[0].addEventListener("click", function(){
  console.log("click l");
  const removeAll_td = document.querySelectorAll('td'); 
  removeAll_td.forEach(function(el){
    el.remove();
  })
})



//-------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
