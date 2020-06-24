var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => {
kittens.push(name);
return kittens;
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
  return kittens
}
