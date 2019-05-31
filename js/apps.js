'use strict';
// var tableEl = document.getElementById('table');

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tableEl = document.getElementById('table');
var formEl = document.getElementById('form');

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

Salmon.prototype.calcCustomersEachHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++){
    this.custEachHour.push(getRandomCustomer(this.minCustPerHour, this.maxCustPerHour));

  }
};
  
Salmon.prototype.calcCookiesEachHour = function(){
  this.calcCustomersEachHour();

  for(var i = 0; i < hoursOfOperation.length; i++){
    var oneHourofCookies = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
    
    this.cookiesSoldEachHour.push(oneHourofCookies);

    this.totalCookiesSold += oneHourofCookies;
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
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookiesSold;
  trEl.appendChild(thEl);

  tableEl.appendChild(trEl);
}
  
var firstAndPike = new Salmon('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new Salmon('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Salmon('Seattle Center', 11, 38, 3.7);
var capitolHill = new Salmon('Capitol Hill', 20, 38, 2.3);
var alki = new Salmon('Alki', 2, 16, 4.6);
firstAndPike.calcCookiesEachHour();

function getRandomCustomer(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min); 
}

function renderHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOfOperation.length; i++){
    var thEl = document.createElement('th');
    var text = document.createTextNode(`${hoursOfOperation[i]}`);
    thEl.appendChild(text);
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
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
      hourlyTotal = hourlyTotal + allStores[j].cookiesSoldEachHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }

}

function handleSubmit(event){
  event.preventDefault();

  var name = event.target.storeName.value;
  var min = Number(event.target.storeMin.value);
  var max = Number(event.target.storeMax.value);
  var average = Number(event.target.average.value);

  new Salmon(name, min, max, average);

  tableEl.innerHTML = '';
  
  renderHeader();
  renderAllStores();
  renderFooter();
  
}


formEl.addEventListener('submit', handleSubmit);


renderHeader();
renderAllStores();
renderFooter();


