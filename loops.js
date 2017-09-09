function forLoop(array){
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

function whileLoop(n){
  while (num >= 0){
    console.log(--num)
  }
  console.log("done")
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)


function doWhileLoop(array){
    do{
      array.pop()
    } while (maybeTrue() && array.length > 0)
    return array
}
