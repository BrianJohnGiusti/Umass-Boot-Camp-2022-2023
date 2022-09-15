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
  let timer = setInterval(function(){
    num = num - 1;

    if(num > 0){
      console.log(num);
    }
    else{
      console.log("DONE!");
      clearInterval(timer);
    }

  }, 1000)
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
  let randomNum;
  let count = 1;
  let timer = setInterval(function(){
    randomNum = Math.random();
    console.log(randomNum)
    if(randomNum > .75) {
      clearInterval(timer);
      console.log(count);
    }
    count++
  }, 1000)
}

randomGame();