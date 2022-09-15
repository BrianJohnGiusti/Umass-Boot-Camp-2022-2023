/*countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds 
decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

TEST CASE
countDown(4);
 3
 2
 1
 "DONE!"
*/

//param: number
function countDown(num){
    for(let i = 1; i < num; i++){
        console.log(num - i)
    }
    console.log("DONE!");
   }

countDown(4);

/*
randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked,
 add 1 to a counter. 
 If the number is greater than .75, 
 stop the timer and
  console.log the number of tries it took before we found a number greater than .75.
*/


//counter
//random
//loop
//conditional >.75
//return count
function randomGame(){
    let count = 1;  
    let randomNum = Math.random();
  
    while(randomNum < .75){
      randomNum = Math.random();
      count ++; 
    }
   console.log(count);
  }
  
randomGame();
