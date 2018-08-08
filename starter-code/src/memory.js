// var MemoryGame = function (cards) {
//   this.cards = cards;
// };

// MemoryGame.prototype.shuffleCard = function (cardsArr) {

// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

// MemoryGame.prototype.finished = function () {

// };


class MemoryGame{
  constructor(cards){
    this.cards = this.shuffleCard(cards);
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  shuffleCard(cardsArr){
    return cardsArr.sort(function(a,b){
      return Math.random() - 0.5
    })
    // this.cards.sort(function(a,b){
    //   return Math.random() - 0.5
    // })
  }

  //firstCard and secondCard represent the name of the cards
  checkIfPair(firstCard, secondCard){
    this.pairsClicked++
    if(firstCard === secondCard){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  finished(){
    return this.pairsGuessed === this.cards.length/2   //to check if all pairs were guessed. So the total number of cards divided by 2 
  }
}