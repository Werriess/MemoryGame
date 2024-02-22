function validateSequence(arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length) {
      console.log("Sorry game over!");
      return false;
    }
  
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        console.log("Sorry game over!");
        return false;
      }
    }
  
    return true;
  }
  
  const arrO = [1, 2, 3];
  const arrT = [1, 2, 3];
  
  console.log(validateSequence(arrO, arrT)); // Outputs: true
  