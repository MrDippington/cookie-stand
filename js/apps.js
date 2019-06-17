/* eslint-disable no-unused-vars */
'use strict';
// var tableEl = document.getElementById('table');

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tableEl = document.getElementById('table');
var formEl = document.getElementById('form');
var totalOfTotals = 0;

var allStores = [];

function Salmon(title, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
  this.title = title;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesSold = 0;
  
  allStores.push(this);
}
// function calculating customers each hour and pushes that into this.custEachHour
Salmon.prototype.calcCustomersEachHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++){
    this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));
  
  }
};
  
Salmon.prototype.calcCookiesEachHour = function(){
  this.calcCustomersEachHour();
  this.cookiesSoldEachHour = [];
  this.totalCookiesSold = 0;
  
  for(var i = 0; i < hoursOfOperation.length; i++){
    // calculates one hour of cookie sales
    var oneHourofCookies = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
    console.log(`${oneHourofCookies} this is one hour of cookies`);
    
    this.cookiesSoldEachHour.push(oneHourofCookies);
    console.log(`${this.cookiesSoldEachHour} this is cookies sold each hour`);
    console.log(`${this.totalCookiesSold} before total = one hour ***`);
    this.totalCookiesSold += oneHourofCookies;
    console.log(`totals ${this.totalCookiesSold}`);
  }
};

Salmon.prototype.render = function(){
  this.calcCookiesEachHour(); 
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.title;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursOfOperation.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    console.log(`in Salmon prototype render ${this.cookiesSoldEachHour}`);
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookiesSold;
  trEl.appendChild(thEl);

  tableEl.appendChild(trEl);
};

function totalsFunction(){
  for(var i = 0; i < allStores.length; i++){
    totalOfTotals += allStores[i].totalCookiesSold;
  }
}
  
var firstAndPike = new Salmon('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new Salmon('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Salmon('Seattle Center', 11, 38, 3.7);
var capitolHill = new Salmon('Capitol Hill', 20, 38, 2.3);
var alki = new Salmon('Alki', 2, 16, 4.6);
// firstAndPike.calcCookiesEachHour();

function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


function renderHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOfOperation.length; i++){
    thEl = document.createElement('th');
    var text = document.createTextNode(`${hoursOfOperation[i]}`);
    thEl.appendChild(text);
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
}

function renderAllStores(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

function renderFooter(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = "Hourly Sales";
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursOfOperation.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesSoldEachHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }
  totalOfTotals = 0;
  totalsFunction();
  // create table element for total of totals
  tdEl = document.createElement('td');
  tdEl.textContent = totalOfTotals;
  trEl.appendChild(tdEl);

}

function handleSubmit(event){
  event.preventDefault();
  
  tableEl.innerHTML = '';
  console.log(`i am running inner HTML`);

  var name = event.target.storeName.value;
  console.log(`${name} this is name`);
  var min = Number(event.target.storeMin.value);
  console.log(`${min} this is the store minimum`);
  var max = Number(event.target.storeMax.value);
  console.log(`${max} this is the store maximum`);
  var average = Number(event.target.average.value);
  console.log(`${average} this is the average`);

  new Salmon(name, min, max, average);

  
  renderHeader();
  renderAllStores();
  renderFooter();
  
}


formEl.addEventListener('submit', handleSubmit);


renderHeader();
renderAllStores();
renderFooter();

