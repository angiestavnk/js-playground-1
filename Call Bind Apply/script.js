//CALL, BIND, APPLY

//CALL
// The call() method calls the function with a given this value and arguments provided individually.

const firstObj = {
  firstName: 'Angelina',
  lastName: 'Stavniiciuc',
  country: 'Moldova',

  getFullName: function() {
    console.log(this)
    console.log(this.firstName + " " + this.lastName)
  }
}

const getTimeZone = function(timezone) {
  console.log('country:', this.country, 'timezone:', timezone);
}

firstObj.getFullName();
getTimeZone.call(firstObj, 'GMT+3');

const secondObj = {
  firstName: 'Ana',
  lastName: 'Lejava',
  country: 'Georgia'
}

firstObj.getFullName.call(secondObj);
getTimeZone.call(secondObj, 'GMT+4');

//APPLY
//The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

getTimeZone.apply(firstObj, ['GMT+3'])
getTimeZone.apply(secondObj, ['GMT+4'])

//BIND
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const printMyTimeZone = getTimeZone.bind(firstObj, 'GMT+3');
printMyTimeZone();
