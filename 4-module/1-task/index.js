'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let li='';
    let ul=document.createElement('ul');
    for (let key in friends){
        li+=`<li>${friends[key].firstName} ${friends[key].lastName}</li>`;
    }
    ul.innerHTML=li;
    return ul;
}