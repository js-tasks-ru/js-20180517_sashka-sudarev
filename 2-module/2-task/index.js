/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

function find (obj, value) {
    let arr=[];
    let way='';
    function search (obj, value) {
        for (let key in obj){
            if (obj[key]===value) {
                way+=key;
                arr.push(way);
                way='';
            }
            if (typeof(obj[key])=='object') {
                way+=key+'.';
                search(obj[key], value);
            }
        }
        if (arr.length==0) return null;
        return (arr.length>1) ? arr : arr[0];
    }
    return search(obj, value);
}