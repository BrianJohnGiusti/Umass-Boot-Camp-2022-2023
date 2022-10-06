function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  /* Write an ES2015 Version */
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  let filterOutOdds2 = (...nums) => nums.filter(num => num % 2 ===0)


let findMin = (...nums) => Math.min(...nums)

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

function test (first,...nums){
    console.log(first)
    console.log(nums)
}

let mergeObject2 = (...objects) => objects.map(...objects)

let mergeObject = (object1, object2) => ({...object1, ...object2})
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



let doubleAndReturnArgs = (array, ...args) => [array, ...args.map(num => num *2)]

const doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map(v => v *2)]
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (...items) => {
    let num = Math.ceiling(Math.random() * items.length)
    return [...items].remove(items[num])
}
/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => [...array1,...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

let addKeyVal = (obj, key, val) => ({...obj, [key]: val})

/** Return a new object with a key removed. */

let removeKey = (obj, key) => {
    let obj2 = {...obj}
    //obj2[key].remove()
    delete obj2[key]
    return obj2
}


/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

let update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}