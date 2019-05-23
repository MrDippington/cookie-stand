'use strict';

// array holding the hours of operation
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeEl = document.getElementById('pike-element');
var seaTacEl = document.getElementById('seaTac-element');
var seaCenterEl = document.getElementById('seaCenter-element');
var capHillEl = document.getElementById('capHill-element');
var alkiEl = document.getElementById('alki-element');

// >>> HELPER FUNCTION
// I got this code from MDN math.random()
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


/*
>>> OBJECT LITERALS FOR EACH STORE
 */
var firstAndPike = {
  title: '1st & Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++)
      this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));  
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var oneHourofCookies = Math.ceil(this.custEachHour[i]*this.avgCookiesPerCust);

      this.cookiesSoldEachHour.push(oneHourofCookies);
    }
  },  
  render: function(){
    this.calcCookiesEachHour();
    var liEl = document.createElement('li');
    liEl.textContent = `${this.title}`;
    pikeEl.appendChild(liEl);
    for(var i = 0; i < hoursOfOperation.length; i++){
      liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      pikeEl.appendChild(liEl);
    }
  }
};

firstAndPike.render();

var seaTacAirport = {
  title: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++)
      this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var oneHourofCookies = Math.ceil(this.custEachHour[i]*this.avgCookiesPerCust);

      this.cookiesSoldEachHour.push(oneHourofCookies);
    }
  },  
  render: function(){
    this.calcCookiesEachHour();
    var liEl = document.createElement('li');
    liEl.textContent = `${this.title}`;
    seaTacEl.appendChild(liEl);
    for(var i = 0; i < hoursOfOperation.length; i++){
      liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seaTacEl.appendChild(liEl);
    }
  }
};

seaTacAirport.render();

var seattleCenter = {
  title: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++)
      this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));  
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var oneHourofCookies = Math.ceil(this.custEachHour[i]*this.avgCookiesPerCust);

      this.cookiesSoldEachHour.push(oneHourofCookies);
    }
  },  
  render: function(){
    this.calcCookiesEachHour();
    var liEl = document.createElement('li');
    liEl.textContent = `${this.title}`;
    seaCenterEl.appendChild(liEl);
    for(var i = 0; i < hoursOfOperation.length; i++){
      liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seaCenterEl.appendChild(liEl);
    }
  }
};

seattleCenter.render();

var capitolHill = {
  title: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++)
      this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));  
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var oneHourofCookies = Math.ceil(this.custEachHour[i]*this.avgCookiesPerCust);

      this.cookiesSoldEachHour.push(oneHourofCookies);
    }
  },  
  render: function(){
    this.calcCookiesEachHour();
    var liEl = document.createElement('li');
    liEl.textContent = `${this.title}`;
    capHillEl.appendChild(liEl);
    for(var i = 0; i < hoursOfOperation.length; i++){
      liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      capHillEl.appendChild(liEl);
    }
  }
};

capitolHill.render();

var alki = {
  title: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSold: 0,
  calcCustomersEachHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++)
      this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));  
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var oneHourofCookies = Math.ceil(this.custEachHour[i]*this.avgCookiesPerCust);

      this.cookiesSoldEachHour.push(oneHourofCookies);
    }
  },  
  render: function(){
    this.calcCookiesEachHour();
    var liEl = document.createElement('li');
    liEl.textContent = `${this.title}`;
    alkiEl.appendChild(liEl);
    for(var i = 0; i < hoursOfOperation.length; i++){
      liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      alkiEl.appendChild(liEl);
    }
  }
};

alki.render();




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
