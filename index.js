new Set([1,1,2,2,3,4])
//{1,2,3,4}

[...new Set("referee")].join("")
//'ref'


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//[1,2,3], true
//[1,2,3], false
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

//this is map of sets 0,1 and then key 1 is an array 

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

let hasDuplicate(arr){
    let s = new Set(arr)
    if(s.size != arr.length){
        return true
    }
    return false
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
let vowels = 'aeiou'
let m = new Map();
let noDupes = m.set(str);
for(let i = 0; i < vowels.length; i++){

}
}




function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    //make a map
    const vowelMap = new Map();

    //iterate through the string
    for(let char of str){
        //make them all lower case
      let lowerCaseChar = char.toLowerCase()
      //check if it is vowel by seeing if that char matches the vowel string
      if(isVowel(lowerCaseChar)){
        //if it is on the map already
        if(vowelMap.has(lowerCaseChar)){
            //set to the map with the key char
            //get the the current value add 1
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
            //if it doesnt exist make it
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }