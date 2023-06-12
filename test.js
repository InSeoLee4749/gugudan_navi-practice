const multiDB = [
    {
        h2 : "타이틀에 해당되는 제목을 넣기",
        detail : [
                    {
                        title : "NCS 프론트앤드과정 훈련중 가장 힘들었던 점은?",
                        view : `단기간안에 전문기술을 훈련하다보니 기본이론훈련이 비전공자로서 
                                이해하기에 너무 생소해서 어려웠습니다. 그 이후 기술도 하나의
                                메뉴얼이라는 것을 알고 되니 재미가 있었습니다.`
                    },
                    {
                        title : "두번째질문?",
                        view : `두번째질문에 대한 답/ 이전의 업무가 지금 나의 훈련에 미친 영향을
                                긍정적으로 기술해야만해요.`
                    },
                    {
                        title : "세번째질문?",
                        view : `세번째질문에 대한 답/ 이전의 업무가 지금 나의 훈련에 미친 영향을
                                긍정적으로 기술해야만해요.`
                    }
                ]
    },
    {
        h2 : "두번째 타이틀에 해당되는 제목을 넣기",
        detail : [
                    {
                        title : "+++ NCS 프론트앤드과정 훈련중 가장 힘들었던 점은?",
                        view : `단기간안에 전문기술을 훈련하다보니 기본이론훈련이 비전공자로서 
                                이해하기에 너무 생소해서 어려웠습니다. 그 이후 기술도 하나의
                                메뉴얼이라는 것을 알고 되니 재미가 있었습니다.`
                    },
                    {
                        title : "+++ 두번째질문?",
                        view : `두번째질문에 대한 답/ 이전의 업무가 지금 나의 훈련에 미친 영향을
                                긍정적으로 기술해야만해요.`
                    },
                    {
                        title : "+++ 세번째질문?",
                        view : `세번째질문에 대한 답/ 이전의 업무가 지금 나의 훈련에 미친 영향을
                                긍정적으로 기술해야만해요.`
                    }
                ]
    }
]

let titleSubject = multiDB[1].detail[2].title;
console.log(`1번문제 : ${titleSubject}`)

    titleSubject = multiDB[0].detail[0].view;
console.log(`2번문제 : ${titleSubject}`)


titleSubject = '';
// titleSubject += multiDB[0].detail[0].title;
// titleSubject += multiDB[0].detail[1].title;
// titleSubject += multiDB[0].detail[2].title;

// titleSubject += multiDB[1].detail[0].title;
// titleSubject += multiDB[1].detail[1].title;
// titleSubject += multiDB[1].detail[2].title;

// 위의 내용을 '이중 array'로 표현하기
for(i in multiDB){
    for(j in multiDB[i].detail){
        titleSubject += multiDB[i].detail[j].title;
    }
}
console.log(`3번문제 : ${titleSubject}`)

// 인서 식 
// for (x in multiDB[0].detail){
//     console.log( multiDB[0].detail[x].title )
// }


let gugu = "";
for(var i=2; i <7; i++){
    for(var j =2; j<10; j++){
        gugu +=`${i}x${j}=${i*j}`;
    }
}
console.log(gugu)
// 구구단 출력 - 네비게이션 제작에 활용한다.