
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
})

// setinterval 은 바로 터지는 것이 아니다. 정해진 시간 이후부터 
// settimeout(실행함수, 시간) -> 시간이 지나면 한번 실행하라

