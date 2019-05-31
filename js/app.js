'use strict';

// array holding the hours of operation
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeEl = document.getElementById('pike-element');
var seaTacEl = document.getElementById('seaTac-element');
var seaCenterEl = document.getElementById('seaCenter-element');
var capHillEl = document.getElementById('capHill-element');
var alkiEl = document.getElementById('alki-element');

// var tableEl = document.getElementById('table');

// >>> HELPER FUNCTION
// I got this code from MDN math.random()
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}



/*
>>> OBJECT LITERALS FOR EACH STORE
*/

// >>> Store 1 ***************** 1ST AND PIKE
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
      
      this.totalCookiesSold += oneHourofCookies;
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
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesSold} cookies`;
    pikeEl.appendChild(liEl);
    
  }
};

firstAndPike.render();

// >>> Store 2 ***************** SEATAC AIRPORT
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
      
      this.totalCookiesSold += oneHourofCookies;
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
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesSold} cookies`;
    seaTacEl.appendChild(liEl);
  }
};

seaTacAirport.render();

// >>> Store 3 ***************** SEATTLE CENTER
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
      
      this.totalCookiesSold += oneHourofCookies;
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
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesSold} cookies`;
    seaCenterEl.appendChild(liEl);
  }
};

seattleCenter.render();

// >>> Store 4 ***************** CAPITOL HILL
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
      
      this.totalCookiesSold += oneHourofCookies;
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
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesSold} cookies`;
    capHillEl.appendChild(liEl);
  }
};

capitolHill.render();

// >>> Store 5 ***************** ALKI
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
      
      this.totalCookiesSold += oneHourofCookies;
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
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesSold} cookies`;
    alkiEl.appendChild(liEl);
  }
};

alki.render();


// function renderHeader(){
//   var trEl = document.createElement('tr');
//   tableEl.appendChild(trEl);

//   for(var i = 0; i < hoursOfOperation.length; i++){
//     var thEl = document.createElement('th');
//     thEl.textContent = `${hoursOfOperation[i]}`;
//     trEl.appendChild(thEl);
//   }
// }

// renderHeader();

// function renderTable(){
//   for(var i = 0; i < hoursOfOperation.length; i++){
//     var trEl = document.createElement('tr');
//     tableEl.appendChild(trEl);
//     var tdEl = document.createElement('td');
//     tdEl.textContent = firstAndPike[i].cookiesSoldEachHour;
//     trEl.appendChild(tdEl);
//   }
// }

// renderTable();
