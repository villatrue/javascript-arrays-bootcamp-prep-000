var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToEndOfArray(element, array){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(element, array){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  
}