var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => {
kittens.push(name);
return kittens;
}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);

}

var destructivelyRemoveLastKitten = () => {
return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
return kittens.shift();
}

var appendKitten = (name) =>{
return kittens1 = kittens.push(name);
}
