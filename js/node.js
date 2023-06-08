let num = 0;
const nm = ["Nodejs","react","jquery","figma","plan"]

setInterval(
    addnum,
    1000
)

function addnum(){
    
    console.log( nm[num] + "훈련중") //nm[nm]은 nm이 순서대로 반복
    num++; //1씩 늘려라
    num = num % nm.length;  //5를 5로 나누니깐 nm에서 0.1.2.3.4 만 반복

}

// 1Nodejs훈련중 2react훈련중 3jquery훈련중... 라고 나온다