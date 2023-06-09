
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 0) {
//         $("body").addClass("s_down")
//     } else {
//         $("body").removeClass("s_down")
//     }
// })

$(document).ready(function(){
    let count = 0; //icon 개별인식하는 숫자변수

    $(".bi-bootstrap-fill").eq(count).addClass('text-info')
    setInterval(colortext, 1000)

    function colortext(){
        count++;
        count %= $(".bi-bootstrap-fill").length;
        $(".bi-bootstrap-fill").removeClass("text-info")
        $(".bi-bootstrap-fill").eq(count).addClass('text-info')
    }
// setinterval 은 바로 터지는 것이 아니다. 정해진 시간 이후부터 
// settimeout(실행함수, 시간) -> 시간이 지나면 한번 실행하라

    //사전인터뷰 시간차를 두고 오픈하기
    // $(".accordion-item .accordion-button").addClass("collapsed")  //초기에 모든 아코디언버튼이 닫혀있는 상태
    
    let faqnum = 0;
    setInterval(faqopen, 3000)
    function faqopen(){
        faqnum++;
        faqnum %=5;

        $(".accordion-item .accordion-collapse").removeClass("show")  //show를 제거, 아코디언 콘텐츠를 닫는다
        $(".accordion-item").eq(faqnum).find(".accordion-collapse").addClass("show") //show를 추가, 아코디언 연다

        $(".accordion-item .accordion-button").addClass("collapsed") //아코디언 버튼을 닫힌 상태
        $(".accordion-item").eq(faqnum).find(".accordion-button").removeClass("collapsed") // 아코디언 버튼 열린 상태
    }
})


