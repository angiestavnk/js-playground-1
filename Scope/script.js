//SCOPE

//GLOBAL SCOPE
var globalVar = 'This variable is created in global scope';

function getGlobalVar() {
  console.log(globalVar);
}

function getGlobalVarFunc() {
  getGlobalVar();
}

getGlobalVarFunc();

//FUNCTION SCOPE

function getFunctionScope() {
  const funcVar = 'This variable is created in function scope';

  function getFunctionScopeVar() {
    console.log(funcVar);
    console.log(globalVar);
  }
}

// getFunctionScopeVar() // Reference error;
// console.log(funcVar) // Reference error;
getFunctionScope();

//BLOCK SCOPE

if(3 > 2) {
  let blockVar = 'This variable is created in block scope';
  var secondBlockVar = 'This variable also is created in block scope';

  console.log(blockVar);
  console.log(secondBlockVar);
}

// console.log(blockVar); //Reference error;
console.log(secondBlockVar);