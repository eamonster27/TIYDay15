/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let aceCount = 0;
  let sum = 0;

  for(let i = 0; i < hand.length; ++i){
    switch(hand[i]) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        sum = sum + (hand[i] * 1);
        break;
      case "K":
      case "Q":
      case "J":
        sum = sum + 10;
        break;
      case "A":
        ++aceCount;
        sum = sum + 11;
        break;
      default:
        console.log("Incorrect input.")
        break;
    }
  }
  while(aceCount > 0 && sum > 21){
    sum = sum - 10;
    --aceCount;
  }

  return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
