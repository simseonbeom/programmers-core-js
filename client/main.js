import { 
  tiger, 
  delayP, 
  getNode, 
  END_POINT, 
  insertLast, 
  renderUserCard
 } from './lib/index.js';

/* 
  1. 태그 template 만들기 
      - `<div></div>`

  2. 태그 렌더링하기
      - insertLast
*/

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  try {
    const { data } = await tiger.get(END_POINT);
    
    await delayP(2000)

    data.forEach((user) => renderUserCard(userCardInner,user));

  } catch {
    console.error('error!');
  }
}

renderUserList();









