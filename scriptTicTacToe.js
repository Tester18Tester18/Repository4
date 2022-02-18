let playerMove = 0;
let player = 'X';
//let dataX = [];
//let dataO = [];

document.getElementById('block_field');
block_field.addEventListener('click', function(eventClick) {
  /*if(player === 'X'){
	player = 'O'
} else { player = 'X'; }*/

  if (playerMove % 2 === 0) {
    player = 'X';
    eventClick.target.innerHTML = player;
  } else {
    player = 'O';
    eventClick.target.innerHTML = player;
  } 
  
let cell = document.getElementsByClassName('block');

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', checkIllegalMove);
}
   playerMove++;
  checkBlock()
});

function checkIllegalMove() {
  //  let num = +this.getAttribute('data-cell');
  /*
   if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert('Illegal move! The cell is not free!');
       restartGame();
    }*/

  
 if (this.textContent) {
//setTimeout("alert('Illegal move! The cell is not free!')", 0.1);
   alert('Illegal move! The cell is not free!');
    restartGame();
  }
//  for (let i = 0; i < cell.length; i++) {
  //  cell[i].addEventListener('click', checkIllegalMove);
//  }

  // changePlayer();
  checkBlock();
}

function restartGame() {
  location.reload();
}

function checkBlock() {

  let blocks = document.getElementsByClassName('block');
  let winnerCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

  ];

  for (let i = 0; i < winnerCases.length; i++) {
    if (blocks[winnerCases[i][0]].innerHTML === player && blocks[winnerCases[i][1]].innerHTML === player && blocks[winnerCases[i][2]].innerHTML === player) {
      setTimeout("alert('The winner is ' + player + '!!! Congratulations to you!')", 100);
      restartGame();
    } else if (playerMove === 9) {
      alert('The game was played in a draw!');
      break;
    }

  }

}




/* for (let i = 0; i <= 9; i++) {
 if (blocks[checkWinnerCases[i][0]].innerHTML === 'X' && blocks[checkWinnerCases[i][1]].innerHTML === 'X' && blocks[checkWinnerCases[i][2]].innerHTML === 'X') {
    alert('The winner is "X"!!! Congratulations to you!');

    restartGame();
    break;
  } else if (blocks[winnerCases[i][0]].innerHTML === 'O' && blocks[winnerCases[i][1]].innerHTML === 'O' && blocks[winnerCases[i][2]].innerHTML === 'O') {
    alert('The winner is "O"!!! Congratulations to you!');
    win = true;
    restartGame();
    break;
  } else if (i === 8) {
    alert('The game was played in a draw!');
    restartGame();
    break;
  }
  */






/* Variant 1
let block = document.getElementsByClassName('block');
let playerMove = 0;
document.getElementById('block_field');
block_field.addEventListener('click', function(eventClick) {

  if (playerMove % 2 === 0) {
    eventClick.target.innerHTML = 'X';
  } else {
    eventClick.target.innerHTML = 'O';
  }
  playerMove++;
  checkBlock()
})

function checkBlock() {
  let blocks = document.getElementsByClassName('block');
  let checkWinnerCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

  ];

  let i = 0;
  while (i < checkWinnerCases.length) {
    if (blocks[checkWinnerCases[i][0]].innerHTML === 'X' && blocks[checkWinnerCases[i][1]].innerHTML === 'X' && blocks[checkWinnerCases[i][2]].innerHTML === 'X') {
      alert('The winner is "X"!!! Congratulations to you!')
    } else if (blocks[checkWinnerCases[i][0]].innerHTML === 'O' && blocks[checkWinnerCases[i][1]].innerHTML === 'O' && blocks[checkWinnerCases[i][2]].innerHTML === 'O') {
      alert('The winner is "O"!!! Congratulations to you!')
    }
    i++;

    if (playerMove === 9) {
      alert('The game was played in a draw!');
      break;
    }
  }
}
*/