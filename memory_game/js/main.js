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
var cardOne = cards[0]; //first flipped card
var cardTwo = cards[2]; //second flipped card

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " +cardOne);
console.log("User flipped " +cardTwo);

if(cardsInPlay.length===2)
{
	if(cardsInPlay[0]===cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again");
	}
}


