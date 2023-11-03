export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

const soundArry = [
  {
    name: '4-sec',
    src: './assets/4-sec.mp3'
  },
  {
    name: 'dendi-tanchiki',
    src: './assets/dendi-tanchiki.mp3'
  },
  {
    name: 'epikfeyl',
    src: './assets/epikfeyl.mp3'
  },
  {
    name: 'eto-fiasko',
    src: './assets/eto-fiasko.mp3'
  },
  {
    name: 'kaplya',
    src: './assets/kaplya.mp3'
  },
  {
    name: 'karlson',
    src: './assets/karlson.mp3'
  },
  {
    name: 'nezhnoe',
    src: './assets/nezhnoe.mp3'
  },
  {
    name: 'vystrel',
    src: './assets/vystrel.mp3'
  },
]

soundArry.forEach((sound) => {
  const audio = new Audio(sound.src);
  sound.audio = audio; // добавляем атрибут audio к каждому объекту в массиве
});

const randomSoundButton = document.querySelector('.randomSound');
console.log(randomSoundButton);
randomSoundButton.addEventListener('click', (event) => {
  console.log(event);
  const randomIndex = random(0, soundArry.length - 1); // получаем случайный индекс массива
  const randomSound = soundArry[randomIndex]; // выбираем случайный звук из массива
  randomSound.audio.play(); // воспроизводим выбранный звук
});