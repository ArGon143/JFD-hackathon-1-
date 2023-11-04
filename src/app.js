import './styles.css'


console.log('hallo dude');

let menuContainer = null; // Переменная, хранящая контейнер меню

// Обработчик события при открытии контекстного меню
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Отменяем стандартное контекстное меню

  // Проверяем, открыто ли уже меню
  if (menuContainer) {
    document.body.removeChild(menuContainer); // Удаляем предыдущее меню
  }

  // Создаем контейнер для меню
  menuContainer = document.createElement('ul');
  menuContainer.className = 'menu';

  // Создаем пункты меню
  const items = [
    { label: 'Считать клики', action: countClicks },
    { label: 'Случайная фигура', action: randomShape },
    { label: 'Случайный звук', action: randomSound },
    { label: 'Случайный цвет', action: randomColor },
    { label: 'Вызвать сообщение', action: showMessage }
  ];

  // Добавляем пункты меню в контейнер
  items.forEach(function(item) {
    const menuItem = document.createElement('li');
    menuItem.className = 'menu-item';
    menuItem.textContent = item.label;
    menuItem.addEventListener('click', item.action);
    menuContainer.appendChild(menuItem);
  });

  // Позиционируем контекстное меню на экране
  menuContainer.style.left = event.clientX + 'px';
  menuContainer.style.top = event.clientY + 'px';

  // Добавляем класс для отображения меню
  menuContainer.classList.add('open');

  // Добавляем контекстное меню на экран
  document.body.appendChild(menuContainer);
});

// Обработчик события при клике на другую область экрана или повторном нажатии правой кнопкой мыши
document.addEventListener('click', function(event) {
  if (event.button !== 2 || !menuContainer) return; // Проверяем, не является ли нажатие другой кнопкой или меню не открыто

  document.body.removeChild(menuContainer); // Удаляем меню
  menuContainer = null; // Сбрасываем переменную контейнера меню
});
  
  // Функции для выполнения действий при выборе пунктов меню
  function countClicks() {
    // Действие при выборе пункта "Считать клики"
    console.log('Считать клики');
  }
  
  function randomShape() {
    // Действие при выборе пункта "Случайная фигура"
    console.log('Случайная фигура');
  }
  
  function randomSound() {
    // Действие при выборе пункта "Случайный звук"
    console.log('Случайный звук');
  }
  
  function randomColor() {
    // Действие при выборе пункта "Случайный цвет"
    console.log('Случайный цвет');
  }
  
  function showMessage() {
    // Действие при выборе пункта "Вызвать сообщение"
    console.log('Вызвать сообщение');
  }