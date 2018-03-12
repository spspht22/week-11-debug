// Possible Suits
var cardSuit = ['H', 'S', 'D', 'C'];
// Possible Values
var cardValue = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// array for cards
var deck = new Array;

// run the displayCard function with an element with id="btn" is clicked
var btn = document.getElementById('btn');
btn.addEventListener('click', displayCard, false);

// select the element to add content to
var cardArea = document.getElementById('cardArea');

// loop through the cardSuit array
for (var i = 0; i < cardSuit.length; i++) {
  // store the new cards suit
  var suit = cardSuit[i];

  // confirm new cards suit
  // console.log(suit);

  // loop through the cardValue array
  for (var j = 0; j < cardValue.length; j++) {
    // store the new cards value
    var value = cardValue[j];
    // create a new card and store it in a varible
    var thisCard = new newCard(suit, value);

    // add the new card to the desk array
    deck.push(thisCard);
    // update HTML to display new deck length
    document.getElementById("totalCards").textContent = "Total Cards Left: " + deck.length
  };
};



// constructor object
function newCard(suit, value) {
  // check what the current suit of the card is
  if(suit == 'H') {
    this.name = 'Hearts';
  } else if(suit == 'S') {
    this.name = 'Spades';
  } else if(suit == 'D') {
    this.name = 'Diamonds';
  } else if (suit == 'C')
    this.name = 'Clubs'
  }

  // updat object properties
  this.suit = suit;
  this.value = value;
  this.img = 'images/' + value + suit + '.png';

  // console.log(this.value, this.name);

  // method for finding what card was clicked
  this.cardInfo = function() {
    return alert('This card is the ' + this.value + ' of ' + this.name);
  };




function displayCard() {
  // find a random card
  var card = deck[Math.floor(Math.random()) * deck.length];
  // store the index for the current card getting added to the screen
  var cardIndex = deck.indexOf(card);
  // create an image element
  var cardImg = document.createElement('img');

  // stop if no cards are left
  if(!card) {
    btn.texContent = "Out of Cards";
    return;
  };

  // update properties of the new image tag
  cardImg.src = card.img;
  cardImg.name = card.names;
  cardImg.value = card.value;
  cardImg.className = 'smallCard';
  cardImg.onclick = card.cardInfo;

  // remove the current card from the deck array
  deck.splice(cardIndex[1]);

  // update HTML to display new deck length
  document.getElementById("totalCards").textContent = "Total Cards Left: " + deck.length;

  // add the card to the screen
  cardArea.appendChild(cardImg);
};
