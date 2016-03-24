// Wait for the DOM to finish loading

$(document).ready(function() {
  // All code to manipulate the DOM
  // Goes inside this function

// Setting turn = 0

var turn = 0;

// Set function to reset board

  function resetBoard(event) {
    $(".box").text("");
    $(".box").removeClass(".box");
    //reset turn
    turn = 0;
  }

// Creating checkWin function via checking against assigned box IDs and icon value

  function checkWinner() {
    if ( $('#box1').html()===icon && $('#box2').html()===icon && $('#box3').html()===icon ) {
      $('#box1, #box2, #box3');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box4').html()===icon && $('#box5').html()===icon && $('#box6').html()===icon ) {
      $('#box4, #box5, #box6');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box7').html()===icon && $('#box8').html()===icon && $('#box9').html()===icon ) {
      $('#box7, #box8, #box9');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box1').html()===icon && $('#box4').html()===icon && $('#box7').html()===icon ) {
      $('#box1, #box4, #box7');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box2').html()===icon && $('#box5').html()===icon && $('#box8').html()===icon ) {
      $('#box2, #box5, #box8');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box3').html()===icon && $('#box6').html()===icon && $('#box9').html()===icon ) {
      $('#box3, #box6, #box9');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box3').html()===icon && $('#box5').html()===icon && $('#box7').html()===icon ) {
      $('#box3, #box5, #box7');
      alert(player + ' wins!!!');
      resetBoard();
    } else if ( $('#box1').html()===icon && $('#box5').html()===icon && $('#box9').html()===icon ) {
      $('#box1, #box5, #box9');
      alert(player + ' wins!!!');
      resetBoard();

// Set if condition for draws

    } else if (turn === 9) {
      alert("It's a draw!");
      resetBoard();
    }
  }

// Set function for handling turns
// If whatever box gets selected, apply text to selected box
// checkWinner at end of function

  $(".box").click(function handleTurn(event){
    if ( !$(this).html() ) {
      turn ++;

      if (turn % 2 === 0) {
        $(this).html("I");
        icon = "I";
        player = "Lisa";
      }

      else if (turn % 2 !== 0) {
        $(this).html("z");
        icon = "z";
        player = "Ralph";
      }
      $(this).html(icon);
      checkWinner();
    }
  });

// Event listener to reset board
$('#reset').on('click', function() {
    resetBoard();
  });

// End of document functions //

});
