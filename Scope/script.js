//SCOPE
//Scope is the current context of execution in which values ans expressions are visible or can be referenced;
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
  var funcVar = "This var variable is created in function scope";
  const funcConst = 'This const variable is created in function scope';

  function getFunctionScopeVar() {
    console.log(funcConst);
    console.log(globalVar);
  }
}

// getFunctionScopeVar() // Reference error;
// console.log(funcConst) // Reference error;
getFunctionScope();
// console.log(funcVar) //Reference error

//BLOCK SCOPE

if(3 > 2) {
  let blockVar = 'This variable is created in block scope';
  var secondBlockVar = 'This variable also is created in block scope';

  console.log(blockVar);
  console.log(secondBlockVar);
}

// console.log(blockVar); //Reference error;
console.log(secondBlockVar);
