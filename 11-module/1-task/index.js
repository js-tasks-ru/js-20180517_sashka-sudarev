(function () {

    function bind(func, context) {
        return function() {
            return func.apply(context, arguments);
        };
    }

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            this.root=root;
            function showTooltip(e){
                let target=e.target;
                if (!target.hasAttribute('data-tooltip')) return;
                this.el.classList.add('tooltip_active');
                this.el.innerText=target.dataset.tooltip;
                let targetPos=target.getBoundingClientRect();
                let tooltipPos=this.el.getBoundingClientRect();
                let [x,y,tooltipHeight]=[0,0,tooltipPos.bottom-tooltipPos.top];
                if (targetPos.bottom>document.documentElement.clientHeight-(tooltipHeight+this.indent)) y=targetPos.top-tooltipHeight-this.indent;
                else y=targetPos.bottom+this.indent;
                this.el.style.top=y+'px';
            }

            function hideTooltip(e){
                let target=e.target ;
                if (!target.hasAttribute('data-tooltip')) return;
                this.el.classList.remove('tooltip_active');
                this.el.innerText='';
            }
            this.showTooltip=bind(showTooltip,this);
            this.hideTooltip=bind(hideTooltip,this);
            this.root.addEventListener('mouseover', this.showTooltip);
            this.root.addEventListener('mouseout', this.hideTooltip);
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {console.log(this.root);
            this.root.removeEventListener("mouseover", this.showTooltip);
            this.root.removeEventListener('mouseout', this.hideTooltip);
        }
    }

    window.Tooltip = Tooltip;
})();