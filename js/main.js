console.log ("Up and running!");
// console.log ("User flipped " + cardOne);
// console.log ("User flipped " + cardFour);

var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
if (ardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
}
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
}
flipCard(0);
flipCard(1);
//	if (cardsInPlay.length === 2) {
//	if (cardsInPlay[0] === cardsInPlay[1]) {
//		alert("You found a match!");
//	} else {
//		alert("Sorry, try again.");
//	}
//}




