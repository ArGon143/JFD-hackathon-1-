import { Menu } from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        document.body.addEventListener("click", (event) => {
            if (event.target.offsetParent === this.el) {
                event.stopPropagation();
                this.click()
            }
        });
    }
    open() {
        try {
            this.el.classList.add('open');

        } catch (err) {
            throw new Error(err);
        }
    }
    close() {
        try {
            this.el.classList.remove('open')
        } catch (err) {
            throw new Error(err);
        }
    }
    add(modules) {
        try {
            (Array.isArray(modules) && modules) && this.el.append(...modules);
        } catch (err) {
            throw new Error(err)
        }
    }
    click() {

    }
}