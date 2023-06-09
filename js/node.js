// let num = 0;
// const nm = ["Nodejs","react","jquery","figma","plan"]

// setInterval(
//     addnum,
//     1000
// )

// function addnum(){
    
//     console.log( nm[num] + "훈련중") //nm[nm]은 nm이 순서대로 반복
//     num++; //1씩 늘려라
//     num = num % nm.length;  //5를 5로 나누니깐 nm에서 0.1.2.3.4 만 반복

// }
// 1Nodejs훈련중 2react훈련중 3jquery훈련중... 라고 나온다.

// let count = 0;
// function gugudan(){
//     count += 2;
//     console.log(count);
// }
// setInterval(gugudan, 3000)

const navidata = [
    {
        d1 : "네이버",
        d1link : "http://www.naver.com",
        cls : ["d1","px-5","text-dark"]
    },
    {
        d1 : "다음",
        d1link : "http://www.daum.com",
        cls : ["d1","px-1",""]
    },
    {
        d1 : "구글",
        d1link : "http://www.google.com",
        cls : ["google","px-2","text-dark"]
    }
]

// console.log(navidata[1].d1);  //다음 출력됨

// console.log(navidata[2].cls[0]); //google 출력됨

// <a href=http://www.daum.net>다음</a> 와 같이 출력되도록 하라(EC6로 표현)
// 과정 1 -> console.log('<a href=http://www.daum.net>${navidata[1].d1}</a>')
// 결과값 -> console.log('<a href=${navidata[1].d1link}>${navidata[1].d1}</a>')

for(x in navidata){
    console.log(`<a href=${navidata[x].d1link}>${navidata[x].d1}</a>`)
}