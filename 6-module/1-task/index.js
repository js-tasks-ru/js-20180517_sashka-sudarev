'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
<<<<<<< HEAD
 */
function getBeforeTime(when) {

    let current = Date.now();
    if (current>=when) return 'событие завершилось';
    let cur=new Date(current);
    let res=[];
    let mainArr=[
        {set:'setFullYear', get:'getFullYear', n:' г.'},
        {set:'setMonth', get:'getMonth', n:' мес.'},
        {set:'setDate', get:'getDate', n:' д.'},
        {set:'setHours', get:'getHours', n:' ч.'},
        {set:'setMinutes', get:'getMinutes', n:' мин.'},
        {set:'setSeconds', get:'getSeconds', n:' сек.'}
    ];
    for (let o of mainArr) {
        let w=new Date(when);
        w[o.set](when[o.get]()-1);
        let i=0;
        while (cur<=w){
            i++;
            cur[o.set](cur[o.get]()+1);
        }
        if (i!=0) res.push(i+o.n);
    }

    return res.join(', ');
}

getBeforeTime(new Date(2019, 5, 17)); // 1 г., 1 д., 11 ч.
getBeforeTime(new Date(2018, 5, 15, 13));  // событие завершилось
getBeforeTime(new Date(2018, 5, 16, 13)); // 1 д.


