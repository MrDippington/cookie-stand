'use strict';

// array holding the hours of operation
// eslint-disable-next-line no-unused-vars
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];





/**
 * OBJECT LITERALS FOR EACH STORE
 */
// eslint-disable-next-line no-unused-vars
var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  render(){}
};
// eslint-disable-next-line no-unused-vars
var seaTacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  render(){}
};
// eslint-disable-next-line no-unused-vars
var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  render(){}
};
// eslint-disable-next-line no-unused-vars
var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  render(){}
};
// eslint-disable-next-line no-unused-vars
var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  render(){}
};



//   getRandomArbitrary: function getRandomArbitrary(minCust, maxCust){ // eslint-disable-next-line no-unused-vars
//     return Math.random() * (maxCust, minCust) + minCust;
//   }
// };

// console.log(Math.round(alki.getRandomArbitrary(alki.minCust, alki.maxCust)));

// liEl = document.createElement('li');
// liEl.textContent = alki.location;
// storeList.appendChild(liEl);

// for (i = 0; i < hoursOfOperation.length; i++){
//   liEl = document.createElement('li');
//   liEl.textContent = alki.hours[i] + ' ' + (Math.round(alki.getRandomArbitrary(alki.minCust, alki.maxCust)));
//   storeList.appendChild(liEl);

// }

// liEl = document.createElement('li');
// liEl.textContent = 'Total ' + alki.hoursTotal;
// storeList.appendChild(liEl);
