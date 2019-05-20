'use strict';


/*
*********** 1st and Pike ***********
*/

// eslint-disable-next-line no-unused-vars
var storeList = document.getElementById('store-list'); 
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: '0',
  getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
    return Math.random() * (maxCust - minCust) + minCust;
  },
};
console.log(Math.round(firstAndPike.getRandomArbitrary(firstAndPike.minCust, firstAndPike.maxCust)));

var liEl = document.createElement('li');
liEl.textContent = firstAndPike.location;
storeList.appendChild(liEl);

for (var i = 0; i < hoursOfOperation.length; i++, firstAndPike.hoursTotal++){ // hours.total why the total is added up
  liEl = document.createElement('li');
  liEl.textContent = firstAndPike.hours[i] + ' ' + (Math.round(firstAndPike.getRandomArbitrary(firstAndPike.minCust, firstAndPike.maxCust)));
  storeList.appendChild(liEl);

}

liEl = document.createElement('li');
liEl.textContent = 'Total ' + firstAndPike.hoursTotal;
storeList.appendChild(liEl);

/*
*********** SeaTac Airport ***********
*/
// eslint-disable-next-line no-unused-vars
var seaTac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: '0',
  getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
    return Math.random() * (maxCust, minCust) + minCust;
  }
};
console.log(Math.round(seaTac.getRandomArbitrary(seaTac.minCust, seaTac.maxCust)));

liEl = document.createElement('li');
liEl.textContent = seaTac.location;
storeList.appendChild(liEl);

for (i = 0; i < hoursOfOperation.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = seaTac.hours[i] + ' ' + (Math.round(seaTac.getRandomArbitrary(seaTac.minCust, seaTac.maxCust)));
  storeList.appendChild(liEl);

}

liEl = document.createElement('li');
liEl.textContent = 'Total ' + seaTac.hoursTotal;
storeList.appendChild(liEl);

/*
*********** Seattle Center ***********
*/
// eslint-disable-next-line no-unused-vars
var seaCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: '0',
  getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
    return Math.random() * (maxCust, minCust) + minCust;
  }
};
console.log(Math.round(seaCenter.getRandomArbitrary(seaCenter.minCust, seaCenter.maxCust)));

liEl = document.createElement('li');
liEl.textContent = seaCenter.location;
storeList.appendChild(liEl);

for (i = 0; i < hoursOfOperation.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = seaCenter.hours[i] + ' ' + (Math.round(seaCenter.getRandomArbitrary(seaCenter.minCust, seaCenter.maxCust)));
  storeList.appendChild(liEl);

}

liEl = document.createElement('li');
liEl.textContent = 'Total ' + seaCenter.hoursTotal;
storeList.appendChild(liEl);

/*
*********** Capitol Hill ***********
*/
// eslint-disable-next-line no-unused-vars
var capHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: '0',
  getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
    return Math.random() * (maxCust, minCust) + minCust;
  }
};
console.log(Math.round(capHill.getRandomArbitrary(capHill.minCust, capHill.maxCust)));

liEl = document.createElement('li');
liEl.textContent = capHill.location;
storeList.appendChild(liEl);

for (i = 0; i < hoursOfOperation.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = capHill.hours[i] + ' ' + (Math.round(capHill.getRandomArbitrary(capHill.minCust, capHill.maxCust)));
  storeList.appendChild(liEl);

}

liEl = document.createElement('li');
liEl.textContent = 'Total ' + capHill.hoursTotal;
storeList.appendChild(liEl);

/*
*********** Alki ***********
*/
// eslint-disable-next-line no-unused-vars
var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: '0',
  getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
    return Math.random() * (maxCust, minCust) + minCust;
  }
};

console.log(Math.round(alki.getRandomArbitrary(alki.minCust, alki.maxCust)));

liEl = document.createElement('li');
liEl.textContent = alki.location;
storeList.appendChild(liEl);

for (i = 0; i < hoursOfOperation.length; i++){
  liEl = document.createElement('li');
  liEl.textContent = alki.hours[i] + ' ' + (Math.round(alki.getRandomArbitrary(alki.minCust, alki.maxCust)));
  storeList.appendChild(liEl);

}

liEl = document.createElement('li');
liEl.textContent = 'Total ' + alki.hoursTotal;
storeList.appendChild(liEl);
