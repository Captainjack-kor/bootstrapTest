/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/


let text = "내가... 지금... 뭐라고 ..... 했지?";
let arr = {
  idx: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  postTitle: ["우왕 ㅋ굳ㅋ", "오징어게임", "안녕", "하이염", "방가방가", "텡", "탕탕탕", "탕탕", "apfjd", "hq", "ggg"],
  postContents: ["123", "hi", "aaa", "cc", "bb", "ee", "gg", "124", "7766", "325", "asdadsa"],
};

let pagingArr = [];
let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
console.log(boardCount);

document.getElementsByClassName('mainTitle')[0].innerText = text;

// var element  = document.getElementById('tr'); // assuming ul exists
// var fragment = document.createDocumentFragment();

// document.getElementsByClassName('testInfo')[0].children;
let appendTest = document.getElementsByClassName('lastName')[0];
var trTest = document.createElement('tr');

let pageBtn = document.getElementsByClassName('pageBtn')[0];
let pageNum = 0;
arr.idx.forEach((el, idx) => {
  var trTest = document.createElement('tr');
  var tdNum = document.createElement('td');
  var tdContents = document.createElement('td');
  var tdTitle = document.createElement('td');
 

  if(idx % 5 === 0) { //버튼 갯수를 결정
    var pBtn = document.createElement('button');
    pBtn.className = 'buttonGap'; //^^;;
    // pBtn.classList.add('buttonGap');
    pageNum++;
    pBtn.textContent = pageNum;
    pageBtn.append(pBtn);
  }

  tdNum.textContent = el;
  tdContents.textContent = arr.postTitle[idx];
  tdTitle.textContent = arr.postContents[idx];

  // fragment.appendChild(td);
  trTest.append(tdNum);
  trTest.append(tdContents);
  trTest.append(tdTitle);
  appendTest.append(trTest);
})


// if(boardCount % 5)

// element.appendChild(fragment);

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
