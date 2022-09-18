const gameContainer = document.getElementById("game");

let flippedCount = 0; //can only be 0 1 2
let totalCardsMatched = 0; //use this to end the game
let C1 = null; //compare cards
let C2 = null ; //compare cards

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


/*
Clicking a card should change the background color to be the color of the class it has.
Users should only be able to change at most two cards at a time.
Clicking on two matching cards should be a “match” — those cards should stay face up.
When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again.
You should make sure to use a setTimeout so that you can execute code after one second.
*/
// TODO: Implement this function!
function handleCardClick(event) {

  //two cards at the time
  if(flippedCount == 2){
    return 
  }
  //flip the current card by changing color
  //store that card as a temp
  let tempCard = event.target;
  tempCard.style.backgroundColor = tempCard.classList[0];


  //set the card to C1 or C2
  if(C1 === null){
    C1 = tempCard;
    flippedCount ++
    
  }
  if(C2 === null){
    C2 = tempCard;
    flippedCount ++
  }

  //compare two cards if there are two flipped 
  if(C1.className === C2.className){
    //if true then do not flip back
    //and increase the count of the total matched
    totalCardsMatched += 2;
    //remove event listener
    C1.removeEventListener("click", handleCardClick);
    C2.removeEventListener("click", handleCardClick);
    //reset the cards to null
    C1 = null;
    C2 = null;
  } 
  else{
    //flip back to original color (with the timeout)
    setTimeout(function() {
      //reset the colors
      C1.style.backgroundColor = "";
      C2.style.backgroundColor = "";
      //reset the variables 
      C1 = null;
      C2 = null;
      flippedCount = 0; 
    }, 1000); //1000ms according to proj

  }
  //end the game 
  if(totalCardsMatched == 10){
    alert("You won!")
  }
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
