/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(arr,maxAge){
    let newArr = arr.map( obj => (obj.age<=maxAge) ? `${obj.name}, ${obj.balance}` : false);
    return (newArr.filter(n => n)).join('\n');;
}
