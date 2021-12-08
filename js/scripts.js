/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

let text = "link move test";
let arr = {
  idx: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  postTitle: ["우왕 ㅋ굳ㅋ", "오징어게임", "안녕", "하이염", "방가방가", "텡", "탕탕탕", "탕탕", "apfjd", "hq", "ggg"],
  postContents: ["123", "hi", "aaa", "cc", "bb", "ee", "gg", "124", "7766", "325", "asdadsa"],
};

let maxPage = Math.ceil(arr.idx.length / 5);
// 애초에 올 때 부터 짤라야 하나

let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
console.log(boardCount);

document.getElementsByClassName('mainTitle')[0].innerText = text;



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
console.log(info);

// var element  = document.getElementById('tr'); // assuming ul exists
// var fragment = document.createDocumentFragment();

// document.getElementsByClassName('testInfo')[0].children;
let appendTest = document.getElementsByClassName('lastName')[0];
var trTest = document.createElement('tr');

let pageBtn = document.getElementsByClassName('pageBtn')[0];
let firstMoveBtn = document.createElement('button');
firstMoveBtn.textContent = "<<";
let leftMoveBtn = document.createElement('button');
leftMoveBtn.textContent = "<";
let rightMoveBtn = document.createElement('button');
rightMoveBtn.textContent = ">";
let lastMoveBtn = document.createElement('button');
lastMoveBtn.textContent = ">>";

let pagingArr = [];
let pageNum = 0;

pageBtn.append(firstMoveBtn);
pageBtn.append(leftMoveBtn);

arr.idx.forEach((el, idx) => {
  var trTest = document.createElement('tr');
  var tdNum = document.createElement('td');
  var tdContents = document.createElement('td');
  var tdTitle = document.createElement('td');
  
  if(idx % 5 === 0) {
    var pBtn = document.createElement('button');
    pBtn.className = 'buttonGap'; //^^;;
    // let buttonGubun = document.getElementsByClassName('buttonGap')[1];
    // pBtn.onclick =  test;
    pBtn.classList.add('buttonClick');
    pageNum++;
    pBtn.classList.add(`button${pageNum}`);
    pBtn.textContent = pageNum;
    pageBtn.append(pBtn);
  }
  
  tdNum.textContent = el;
  tdContents.textContent = arr.postTitle[idx];
  tdTitle.textContent = arr.postContents[idx];

  trTest.append(tdNum);
  trTest.append(tdContents);
  trTest.append(tdTitle);

  // pagingArr.fillter((el) => {
  // pagingArr.push([])
  // if(idx >= 5) {
    appendTest.append(trTest);
  // }
  // });
})

pageBtn.append(rightMoveBtn);
pageBtn.append(lastMoveBtn);

document.getElementsByClassName('button1')[0].addEventListener("click", function(){
  console.log("1번")
});

document.getElementsByClassName('button2')[0].addEventListener("click", function(){
  console.log("2번")
});

document.getElementsByClassName('button3')[0].addEventListener("click", function(){
  console.log("3번")
});

function test() {
  // console.log(ee);
  event.preventDefault();
  
  // console.log("hi");

  // document.getElementsByClassName('button1').addEventListener = function a() {
  //   console.log(('1번'));
  // }

  // document.getElementsByClassName('button2').onclick = function b() {
  //   console.log(('2번'));
  // };
  
  // document.getElementsByClassName('button3').onclick = function c() {
  //   console.log(('3번'));
  // };
}


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
