function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  /* Write an ES2015 Version */

  function squareAndFindEvens(numbers){
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0 );
    return evens;
  }


  function squareAndFindEvens(numbers){
    var squares = numbers.map(num => num ** 2).filter(square => square % 2 === 0 );
  }

  const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)