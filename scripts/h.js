const getStartedBtn = document.querySelector('.btn');
getStartedBtn.addEventListener('click', () => {
  console.log('Get started button clicked!');
});
const courseCards = document.querySelectorAll('.card');
courseCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#eee';
  });
  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'white';
  });
});
