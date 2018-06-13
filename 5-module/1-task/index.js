'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tr=table.querySelectorAll('tbody tr');
    for (let k in tr){
        if (k=='length') break;
        let td=tr[k].querySelectorAll('td');
        if (td[3].dataset.available===undefined) tr[k].hidden=true;
        else tr[k].classList.add((td[3].dataset.available=='true') ? 'available' : 'unavailable');
        tr[k].classList.add((td[2].innerHTML=='m') ? 'male' : 'female');
        if (+td[1].innerHTML<18) tr[k].style.textDecoration='line-through';
    }
}