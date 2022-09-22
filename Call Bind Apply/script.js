//CALL, BIND, APPLY

//CALL
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
getTimeZone.apply(firstObj, ['GMT+3'])
getTimeZone.apply(secondObj, ['GMT+4'])

//BIND
const printMyTimeZone = getTimeZone.bind(firstObj, 'GMT+3');
printMyTimeZone();
