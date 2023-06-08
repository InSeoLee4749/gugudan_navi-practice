// var swiper = new Swiper('.swiper-container', {
//     autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//     },
// });


// let classArr = document.getElementsByClassName("bi-bootstrap-fill")
// let idSingle = document.getElementById("h_section")

// //아이디가 h_section인 객체에 navistyle이라는 클래스를 삽입하라
// idSingle.classList.add("naviStyle")

// // 1. body에 ddd라는 클래스 삽입하기
// document.body.classList.add("ddd")
// // 제이쿼리 표현법 : $("body").addClass("ddd")

// // 2. 아이디가 h_section인 객체에 border-bottom이라는 클래스를 삽입하라
// document.getElementById("h_section").classList.add("border-bottom")
// // 제이쿼리 표현법 : $("#h_section").addClass("border-bottom")


let groupClass = document.getElementsByClassName("bi-bootstrap-fill");

//아이콘에 모두 색을 넣었다.
// groupClass.item(0).classList.add("text-info")
// groupClass.item(1).classList.add("text-info")
// groupClass.item(2).classList.add("text-info")
// groupClass.item(3).classList.add("text-info")

//풀어버리는 것= item, 
for(var i=0; i<groupClass.length; i++){
    // groupClass.item(i).classList.add("text-info");
}
