var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var capitalLetters = dinosaur.toUpperCase();
var substitute = text.replace('Velociraptor', capitalLetters);
var toSlice = substitute.substr(0, substitute.length/2);


console.log(toSlice);