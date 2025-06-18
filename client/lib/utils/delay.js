import { getNode } from '../dom/getNode.js';

// callback

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = 0;
//       second.style.top = 0;
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

// 내가 이거 끝나면 꼭 너한테 알려줄게 약속할게...


// promise



/*
Promise를 사용하는 이유?

- 콜백의 한계 (콜백 지옥)
- 가독성을 위해
- 비동기 작업을 순차적으로 처리 👍👍👍👍👍

*/


function delayP(shouldRejected = false, timeout = 1000){

  return new Promise((resolve,reject) => {

    setTimeout(() => {
      
      if(!shouldRejected){
        resolve('성공!');
      }else{
        reject({message:'오류 발생!'});
      }
    }, timeout);
  })
}

delayP()
.then(()=>{
  
  first.style.top = '-100px';
  second.style.top = '100px';
  
  return delayP()
})

.then((res)=>{
  
  first.style.transform = 'rotate(360deg)';
  second.style.transform = 'rotate(-360deg)';

  return delayP();
})
.then(()=>{

  first.style.top = 0;
  second.style.top = 0;
  
})



















