(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            this.createTable = function(){
                let tbodyStr='<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td></tr></thead><tbody>';
                for (let str of this.data){
                    tbodyStr+=`<tr><td>${str.name}</td><td>${str.age}</td><td>${str.salary}</td><td>${str.city}</td><td><a href="#delete" data-delete="${str.id}">X</a></td></tr>`;
                }
                tbodyStr+='</tbody>';
                this.el.innerHTML=tbodyStr;
                this.el.classList.add('pure-table');
            }
            let self=this;
            this.el.onclick=function(e){
                let target=e.target;
                if (target.closest('[data-delete]')) {
                    target.closest('tr').remove();
                    self.onRemoved(+target.dataset.delete);
                }
            }
            this.createTable();
        }


        /**
         * Метод который вызывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(`Из таблицы удален пользователь ${id}`);
        }
    }

    window.ClearedTable = ClearedTable;
})();
