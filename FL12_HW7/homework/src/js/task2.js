let maximal_random, maximal_prize, user_total_prize, game_again,
    usingAttempt, userAttempt, RandomNumber, user_won, userNumber;
var game = confirm('Do you want to play a game ?');
if(game === true) {
   while(game === true) {
       maximal_random = 8;
       maximal_prize = 100;
       user_total_prize = 0;
       usingAttempt = 3;
       userAttempt = 4;
       game_again = true;
     while (game_again) {
          RandomNumber = Math.floor(Math.random() * (maximal_random + 1));
          user_won = false;
         for (let k = 1; ; k++) {
            userNumber = +prompt(`Choose a roulette pocket number from 0 to ` +maximal_random+
            `\nAttempts left: ${userAttempt-k}\nTotal prize: ${user_total_prize} $\nPossible prize on current attempt: `
            +Math.floor(maximal_prize / Math.pow(2, k-1))+ `$`);
             if (userNumber === RandomNumber) {
                 user_total_prize = user_total_prize + maximal_prize/2;
                 break;
             } else {
                   if (k === usingAttempt) {
                       user_won = true;
                       break;
                   }
               }
         }
            if (user_won === true) {
                break;
            }
            game_again = confirm('Congratulation, you won! Your prize is: ' +user_total_prize+
           ' Do you want to continue?');
            if (game_again) {
                maximal_prize = maximal_prize * 2;
                maximal_random = maximal_random + 4;
            } else {
                break;
              }
        }
        alert('Thank you for your participation. Your prize is:' +user_total_prize+ '$');
        game = confirm('Do you want to play a game again ?');
   }
} else {
    alert('You did not become a billionaire, but can. ');
  }