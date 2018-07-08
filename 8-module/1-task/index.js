'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.items=items;

    this.createTable = function(items){
        let tbodyStr='<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>';
        for (let str of items){
            tbodyStr+=`<tr><td>${str.name}</td><td>${str.age}</td><td>${str.salary}</td><td>${str.city}</td></tr>`;
        }
        tbodyStr+='</tbody>';
        this.el.innerHTML=tbodyStr;
    }

    this.createTable(items);

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        let i=0;
        let targetColumn='name';
        for (let a in this.items[0]){
            if (column==i) targetColumn=a;
            i++;
        }

        function compareNumeric(a, b) {
            let x;
            if (a[targetColumn] > b[targetColumn]) x = 1;
            if (a[targetColumn] < b[targetColumn]) x = -1;
            return (desc) ? -x : x;
        }

        this.items.sort(compareNumeric);
        this.createTable(items);
        console.log(this.items);
    };
}

