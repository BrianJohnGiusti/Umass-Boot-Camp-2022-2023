/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  //build it row by row upwards until the height is reached
  /*for (let y = 0; y < HEIGHT; y++) {
    //create an element for each slot in the row
    for(let x = 0; x < WIDTH; x++){
      board.push[y][x]
    }
   
  }*/
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
}
//solution suggests 
//board.push(Array.from({ length: WIDTH }));

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.querySelector('#board');
  //solution sugggests
  //const board = document.getElementById('board');

  // TODO: add comment for this code

  //this is where you click to play
  //create the top table row
  let top = document.createElement("tr");
  //set the attribute to be the top row
  top.setAttribute("id", "column-top");
  //set a hanlder to see if that cell is clicked
  top.addEventListener("click", handleClick);

  //loop through and create the top clickable row
  for (let x = 0; x < WIDTH; x++) {
    //crate a data element
    const headCell = document.createElement("td");
    //set it to an id
    headCell.setAttribute("id", x);
    //add it to the top 
    top.append(headCell);
  }
  //add the token to the board
  htmlBoard.append(top);

  // TODO: add comment for this code

  //loop through all the rows
  for (let y = 0; y < HEIGHT; y++) {
    //create a data cell
    const row = document.createElement("tr");
    //loop through all the cols
    for (let x = 0; x < WIDTH; x++) {
      //create a data cell
      const cell = document.createElement("td");
      //with id of y-x
      cell.setAttribute("id", `${y}-${x}`);
      //add cell to row
      row.append(cell);
    }
    //put row on the board
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  //take the total height and subtract the extra row for clicking
  for (let y = HEIGHT - 1; y >= 0; y--) {
    //if it is possible to place it
    if (!board[y][x]) {
      //return the row since you have col
      return y;
    }
  }
  //if row is filled
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  const token = document.createElement('div');
  //add the class as token
  token.classList.add('token');
  //add the player that placed it
  token.classList.add(`p${currPlayer}`);
  
  //solution suggests
  //token.style.top = -50 * (y + 2);

  //get the element with the y-x id we created
  let cell = document.getElementById(`${y}-${x}`);

  cell.append(token);
  
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (board.every(row => row.every(cell => cell))) {
    return endGame('Tie!');
  }

  //a short cut would be to check if the entire top row is filled since that is where the end is
  /*for(let i = 0; i < WIDTH; i++){
    if (board[6][i] === null) {
      return 
    }
  }
  return endGame('Tie!');
  */

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      //check all possibilies to check for a win based on most recently played token

      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
