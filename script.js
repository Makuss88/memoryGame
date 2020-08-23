const cardsBefore = ['u0.jpg', 'u0.jpg', 'u1.jpg', 'u1.jpg', 'u2.jpg', 'u2.jpg', 'u3.jpg', 'u3.jpg',
                     'u4.jpg', 'u4.jpg', 'u5.jpg', 'u5.jpg', 'u6.jpg', 'u6.jpg', 'u7.jpg', 'u7.jpg',
                     'u8.jpg', 'u8.jpg', 'u9.jpg', 'u9.jpg', 'u10.jpg', 'u10.jpg', 'u11.jpg', 'u11.jpg'];

const cardsAfter = [];

const u0 = document.getElementById('u0');
const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');
const u6 = document.getElementById('u6');
const u7 = document.getElementById('u7');
const u8 = document.getElementById('u8');
const u9 = document.getElementById('u9');
const u10 = document.getElementById('u10');
const u11 = document.getElementById('u11');
const u12 = document.getElementById('u12');
const u13 = document.getElementById('u13');
const u14 = document.getElementById('u14');
const u15 = document.getElementById('u15');
const u16 = document.getElementById('u16');
const u17 = document.getElementById('u17');
const u18 = document.getElementById('u18');
const u19 = document.getElementById('u19');
const u20 = document.getElementById('u20');
const u21 = document.getElementById('u21');
const u22 = document.getElementById('u22');
const u23 = document.getElementById('u23');



  


u1.addEventListener('click', function() { revelCard(1); });
u2.addEventListener('click', function() { revelCard(2); });
u3.addEventListener('click', function() { revelCard(3); });
u4.addEventListener('click', function() { revelCard(4); });
u5.addEventListener('click', function() { revelCard(5); });
u6.addEventListener('click', function() { revelCard(6); });
u7.addEventListener('click', function() { revelCard(7); });
u8.addEventListener('click', function() { revelCard(8); });
u9.addEventListener('click', function() { revelCard(9); });
u10.addEventListener('click', function() { revelCard(10); });
u11.addEventListener('click', function() { revelCard(11); });
u12.addEventListener('click', function() { revelCard(12); });
u13.addEventListener('click', function() { revelCard(13); });
u14.addEventListener('click', function() { revelCard(14); });
u15.addEventListener('click', function() { revelCard(15); });
u16.addEventListener('click', function() { revelCard(16); });
u17.addEventListener('click', function() { revelCard(17); });
u18.addEventListener('click', function() { revelCard(18); });
u19.addEventListener('click', function() { revelCard(19); });
u20.addEventListener('click', function() { revelCard(20); });
u21.addEventListener('click', function() { revelCard(21); });
u22.addEventListener('click', function() { revelCard(22); });
u23.addEventListener('click', function() { revelCard(23); });

let oneVisible = false;

function revelCard(nr) {
  
  const card = 'url(./img/' + cardsBefore[nr] + ')';
  console.log(card);
  
};

 