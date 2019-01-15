var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element)
