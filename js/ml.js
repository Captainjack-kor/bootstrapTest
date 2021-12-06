var lang = "un"; //언어 값 받아올 변수. un은 undefined 의 앞 2글자.

// 다국어 언어 예시. 
let multiLanguage = { 
    "ko" : { 
        msg : "안녕하세요.", 
        title: "한국어", 
    }, 
    
    "en" : { 
        msg : "Hello World.", 
        title: "English", 
    } 
};

window.onload = () => { 
  let changeNodeList = Array.prototype.slice.call(document.querySelectorAll('[data-detect]')); 

  changeNodeList.map( v => {
    v.textContent = multiLanguage[lang][v.dataset.detect] 
  }) 
};


 console.log(navigator.language);
 if (navigator.language!=null) //이 값이 null이 아니면. 즉 크롬이나 파폭이면
 {
     lang = navigator.language;
 } else if (navigator.userLanguage!=null) { //이 값이 null이 아니면. 즉 익스라면
     lang = navigator.userLanguage;
 } else if (navigator.systemLanguage!=null) { //여기까지는 안 올거 같은데 혹시나 해서
     lang = navigator.systemLanguage;
 } else { //이도저도 아니면
     lang="un";
 }

 

 lang = lang.toLowerCase(); //받아온 값을 소문자로 변경
 lang = lang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기

 

  if (lang=="ko") { //한국어라면
      console.log("한국어");
  } else if (lang=="cn" || lang=="tw" || lang=="zh") { //중국어라면
      console.log("중국어");
  } else if (lang == "en") {
      console.log("미국");
  } else{ //그 외~
      console.log("그 외");
  }

  if(lang==="en") {
    document.getElementsByClassName('domtest')[0].innerText = "homehome";
    document.getElementsByClassName('domtestTitle')[0].innerText = "clean blog";
    document.getElementsByClassName('domtestsubTitle')[0].innerText = "by start bootstrap";
  }

