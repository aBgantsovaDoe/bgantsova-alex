const RUS_PHRASES = [
  'Привычка - вторая натура',
  'Заметьте хорошо!',
  'Беда не приходит одна',
  'Через тернии к звёздам',
];
const LATIN_PHRASES = [
  'Consuetudo est altera natura',
  'Nota bene',
  'Nulla calamitas sola',
  'Per aspera ad astra',
];
const board = document.querySelector('.board');
const createButton = document.querySelector('.create');

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};
let used = new Array();
function getPhrase () {
  let num;
  let different;
  do {
    different = true;
    num = getRandomInt(RUS_PHRASES.length);
    for (let el in used) {
      if (used[el] === num) different = false;
    }
  }
  while (!different)
  used[used.length] = num;
  return RUS_PHRASES[num];
};

const template = document.querySelector('#phrase-template');

const onCreateClick = function () {
  if (used.length === RUS_PHRASES.length) {
    document.querySelector('.warning').classList.remove('hidden');
  }
  else {
    const item = template.content.cloneNode(true);
    item.querySelector('.phrase__text').textContent = `${used.length + 1}. ${getPhrase()}`;
    board.appendChild(item);
  }
};

createButton.addEventListener('click', onCreateClick);

board.addEventListener('click', function (evt) {
  const item = evt.target;
  item.closest('.phrase').classList.add('onclick');
  let text = item.textContent;
  const num = text.substring(0, text.indexOf('.'));
  item.textContent = `${num}. ${LATIN_PHRASES[used[num - 1]]}`;
  item.closest('.phrase').classList.add('move');

});

const colorButton = document.querySelector('.color');
colorButton.addEventListener('click', function () {
  const items = board.querySelectorAll('.phrase');
  if (items.length > 0) {
    for (let el = 0; el < items.length; el++) {
      if(items[el].classList.contains('move')) {
        items[el].style.backgroundColor = 'rgb(0, 251, 255)';
      }
    }
  }  
});
