function loopStrings(loopArray){
  for (var i = 0; i < 25; i++){
    if (i == 1){
      loopArray.push("I am 1 strange loop")
    }
    else {
      loopArray.push("I am ${i} strange loops")
    }
  }
  return loopArray
}

console.log(loopStrings([1,2]))
