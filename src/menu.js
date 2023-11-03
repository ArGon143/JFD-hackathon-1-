import {Menu} from './core/menu'
import {Module} from './core/module'
import {getEvent} from './utils'

export class ContextMenu extends Menu {
    constructor(selector){
        super(selector)
    }

    open() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.el.style.top = `${event.clientY}px`;
            this.el.style.left = `${event.clientX}px`;
            this.el.classList.add('open');
        })
    }
    
    close() {
        document.body.addEventListener('click', event => {
            event.preventDefault();
            if (event.target.classList[0] === 'menu-item'){
                // trigger();
                this.el.classList.remove('open');
            }
            this.el.classList.remove('open');
        })
    }
    
    add(array) {
        for (let item in array){
            const newModule = new Module(array[item].type, array[item].text);
            this.el.insertAdjacentHTML("beforeend", newModule.toHTML());
        }
    }

}

