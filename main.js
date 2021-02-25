


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

  this.classList.toggle('flip');

//   this.classList.add('flip');

  if (!hasFlippedCard){
      hasFlippedCard =true;
      firstCard = this;
      return;
  }
  secondCard = this;
//   hasFlippedCard = false;

  checkForMatch();

}

function checkForMatch(){
    

   let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;
   isMatch ? disableCards() : unflipCards();

}


function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        // lockBoard = false;
        resetBoard();

    },1500);
}

function resetBoard(){

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle (){
    cards.forEach( cards => {
        let randomPosition = Math.floor(Math.random()*12);
        cards.style.order = randomPosition;
    });
})();




cards.forEach(card => card.addEventListener('click', flipCard));














