const cardsBorder = ['u0', 'u0', 'u1', 'u1', 'u2', 
'u2', 'u3', 'u3', 'u4', 'u4', 'u5', 'u5', 
'u6', 'u6', 'u7', 'u7', 'u8', 'u8', 'u9', 
'u9', 'u10', 'u10', 'u11', 'u11'];

let cards = document.querySelectorAll('div');
// console.log(cards);
cards = [...cards];

let activeCard = '';
const activeCards = [];

let gameResults = 0;
const gameParts = cards.lenght / 2;

const clickCard = function () {
  activeCard = this;
  activeCard.classList.remove('hidden');
  
  //first or second card
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
  } else {
    cards.forEach(card => card.removeEventListener('click', clickCard));
  }
}

const init = () => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsBorder.length);
    card.classList.add(cardsBorder[position]);
    cardsBorder.splice(position, 1);
  });

  setTimeout(() => {
      cards.forEach(card => {
        card.classList.add('hidden')
        card.addEventListener('click', clickCard);
      });
  }, 3000);
};

init();