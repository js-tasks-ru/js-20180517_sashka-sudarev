'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getMinMax(str) {
    let min=Infinity;
    let max=-Infinity;
    for (let i=0; i<str.length; i++){
        if (str[i]==' ') continue;
        let a=parseFloat(str.slice(i));
        if (isNumeric(a))  {
            i+=(a+'').length;
            min = (min>a) ? a : min;
            max = (max<a) ? a : max;
        }
    }
    return {min:min, max:max}
}
