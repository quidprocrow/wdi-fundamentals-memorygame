console.log ("Up and running!");
// console.log ("User flipped " + cardOne);
// console.log ("User flipped " + cardFour);

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);	
	var checkForMatch = function () {
	if (cardsInPlay.length > 1) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			} 
		else {
			alert("Sorry, try again.");
			}
		}
	}
	checkForMatch(cardId);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}
createBoard();
document.getElementById('reset').addEventListener('click', resetGame);
var resetGame = function () {
	cardsInPlay.pop();
	cardsInPlay.pop();
	var cardOne = document.getElementById('0');
	var cardTwo = document.getElementById('1');
	var cardThree = document.getElementById('2');
	var cardFour = document.getElementById('3');
	cardOne.setAttribute('src', 'images/back.png');
	cardTwo.setAttribute('src', 'images/back.png');
	cardThree.setAttribute('src', 'images/back.png');
	cardFour.setAttribute('src', 'images/back.png');
	console.log("Reset boss!");
	alert("Reset!");
}






