import { Module } from '../core/module';
import { randomNumber } from '../utils';

export class ShapeModule extends Module {
  constructor() {    
    super('shapeModule', 'Shape');
  }

  trigger() {
    
    const shape = document.createElement('div');
        
    const size = randomNumber(50, 200); 
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
    const positionX = randomNumber(0, window.innerWidth - size);
    const positionY = randomNumber(0, window.innerHeight - size);

    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.position = 'absolute';
    shape.style.left = `${positionX}px`;
    shape.style.top = `${positionY}px`;
    shape.style.borderRadius = size > 100 ? '50%' : '0'; 

    document.body.appendChild(shape);

    shape.addEventListener('click', () => {
      shape.remove();
    });
    
    setTimeout(() => {
      shape.remove();
    }, 5000); 
  }
}

const shapeModule = new ShapeModule();
shapeModule.trigger(); 
