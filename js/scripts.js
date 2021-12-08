/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/


let text = "내가... 지금... 뭐라고 ..... 했지?";
let arr = {
  idx: ["1", "2", "3", "4", "5"],
  postTitle: ["우왕 ㅋ굳ㅋ", "오징어게임", "안녕", "하이염", "방가방가"],
  postContents: ["123", "hi", "aaa", "cc", "bb"],
};

document.getElementsByClassName('mainTitle')[0].innerText = text;

var element  = document.getElementById('tr'); // assuming ul exists
var fragment = document.createDocumentFragment();

// document.getElementsByClassName('testInfo')[0].children;
let appendTest = document.getElementsByClassName('lastName')[0];
var trTest = document.createElement('tr');

arr.idx.forEach((el) => {
  var td = document.createElement('td');
  td.textContent = el;
  // fragment.appendChild(td);
  appendTest.append(td);
})

arr.postTitle.forEach((el) => {
  var td = document.createElement('td');
  td.textContent = el;
  // appendTest.appendChild(td);
})

arr.postContents.forEach((el) => {
  var td = document.createElement('td');
  td.textContent = el;
  // fragment.appendChild(td);
})

element.appendChild(fragment);

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
