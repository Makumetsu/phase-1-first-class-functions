function  spy() { 
 45
}
function receivesAFunction(spy) {
    return 40 + spy()
}
function returnsANamedFunction(name, myFunction) {
    console.log('Hello world');
}

function returnsANamedFunction(name) {
    return function greet() {
      console.log('Hello ' + name);
    };
  }
  
  const names = 'Mohamed';
   returnsANamedFunction(names);
function returnsAnAnonymousFunction(not1) {
return function (){
    console.log('Hello ' + not1);
};
}
const not  = function ofthe(){
    'Jogn'
}
returnsAnAnonymousFunction(not)