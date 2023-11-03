import './styles.css'
import { SoundModule } from './modules/sound.module';
import { ContextMenu } from './menu'

const menu = new ContextMenu('#menu');
const modules = [new SoundModule('random-sound', 'Включить звук')]
const parser = new DOMParser();

menu.add(
    modules.map(module => parser.parseFromString(module.toHTML(), 'text/html').body
        .firstElementChild)
);

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.open();
});

const randomSoundsModule = new SoundModule('test', 'test');
const btn = document.querySelector('[data-type="random-sound"]')
btn.addEventListener('click', () => {
    randomSoundsModule.trigger();
})