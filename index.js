function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("Big balls.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Balls.')
    }
  }