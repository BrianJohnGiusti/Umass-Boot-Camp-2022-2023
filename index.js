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
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }