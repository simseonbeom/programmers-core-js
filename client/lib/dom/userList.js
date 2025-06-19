
import { insertLast } from './insert.js'






/* 태그를 생성하는 함수  */

function createUserCard(user){

  return `
    <article class="user-card" data-index="user-1">
      <h3 class="user-name">${user.name}</h3>
      <div class="user-resouce-info">
        <div>
          <a class="user-email" href="mailto:${user.email}"
            >${user.email}</a
          >
        </div>
        <div>
          <a
            class="user-website"
            href="${user.website}"
            target="_blank"
            rel="noopener noreferer"
            >${user.website}</a
          >
        </div>
      </div>
      <button class="delete">삭제</button>
    </article>
  `
}


/* 

loadingSpinner를 렌더링 
  - loadingSpinner 생성 [createSpinner]
  - 렌더링 [renderSpinner]

*/





/* 태그를 렌더링하는 함수 */

export function renderUserCard(target,data){
  insertLast(target,createUserCard(data));
}






















