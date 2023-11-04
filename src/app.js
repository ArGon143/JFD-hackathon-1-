import './styles.css';
import { ShapeModule } from './modules/shape.module';

const shapeModule = new ShapeModule();

function triggerShapeModule() {
  shapeModule.trigger();
}
document.addEventListener('DOMContentLoaded', () => {
  
  const generateShapeButton = document.getElementById('generateShapeButton');
  
  if (generateShapeButton) {
    generateShapeButton.addEventListener('click', triggerShapeModule);
  } else {
    console.error('Кнопка для генерации фигур не найдена!');
  }
});
