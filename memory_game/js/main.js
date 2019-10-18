/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 		console.log("You found a match!");
	} 	else {
  		console.log("Sorry, try again.");
	}
}
function flipCard(cardId){
	console.log("User flipped " +cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length>1){
	checkForMatch();
	}
	return;
}

flipCard(0);
flipCard(2);



