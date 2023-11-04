import { Module } from '../core/module';
import { randomNumber } from '../utils';

import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';
import image5 from '../img/image5.png';
import image6 from '../img/image6.png';
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';
import image9 from '../img/image9.png';
import image10 from '../img/image10.png';
import image11 from '../img/image11.png';
import image12 from '../img/image12.png';

export class ShapeModule extends Module {
  constructor() {    
    super('shapeModule', 'Generate a random shape');
    this.images = [image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11,image12];
    this.lastUsedImages = []; 
  }

  trigger() {    
    let availableImages = this.images.filter(img => !this.lastUsedImages.includes(img));    
    const randomImage = availableImages[randomNumber(0, availableImages.length - 1)];
    this.lastUsedImages.push(randomImage);
    
    if (this.lastUsedImages.length > 3) {
      this.lastUsedImages.shift();
    }
   
    const imageElement = new Image();
    imageElement.src = randomImage;
    imageElement.style.position = 'absolute';
    const size = randomNumber(70, 250);
    imageElement.style.width = `${size}px`;
    imageElement.style.height = `${size}px`;
    const positionX = randomNumber(0, window.innerWidth - size);
    const positionY = randomNumber(0, window.innerHeight - size);
    imageElement.style.left = `${positionX}px`;
    imageElement.style.top = `${positionY}px`;
   
    document.body.appendChild(imageElement);
    
    imageElement.addEventListener('click', () => {
      imageElement.remove();
    });    
    
    setTimeout(() => {
      imageElement.remove();
    }, 5000);
  }
}

const shapeModule = new ShapeModule();
shapeModule.trigger();