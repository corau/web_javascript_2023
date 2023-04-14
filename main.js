// console.log('Test');

/**
 * Prozedural Pattern
 */

function calcZins() {
  // content of function
  let result = document.getElementById('result');

  let k = document.getElementById('k');
  let p = document.getElementById('p');
  let t = document.getElementById('t');

  let zinsen = (k.value * p.value * t.value) / 36000;
  result.innerHTML = 'This is your result ' + zinsen;
}

const myInts = [1, 2, 3];
const myStrings = ['conny', 'susi'];

/*for (var i = 0; i < myInts.length; i++) {
  console.log(myInts[i]);
}*/

/**
 * Functional Pattern
 */

myInts.forEach((item) => console.log(item));
const doubleArray = myInts.map((item) => item * 2);
console.log('Double Array', doubleArray);
console.log('Initial Array', myInts);

function addToList(list, item) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.appendChild(li);
}
const list = document.getElementById('myNumbers');
myInts.forEach((item) => addToList(list, item));
const listStrings = document.getElementById('myStrings');
myStrings.forEach((item) => addToList(listStrings, item));

function Flight(id, from, to, price) {
  this.from = from;
  this.to = to;
  this.id = id;
  this.price = price;
}

let flight1 = new Flight(1, 'Graz', 'Hamburg', 200);
let flight2 = new Flight(2, 'Graz', 'Wien', 50);

const flights = [flight1, flight2];

function FlightService() {
  this.basket = [];

  this.add = function (id) {
    this.basket.push(flights[id]);
    let count = document.getElementById('count');
    count.innerHTML = this.basket.length;
  };
}

const flightService = new FlightService();

try {
 /* for(const i of abc) {
    console.log(i)
  }*/
 // null.length;
  throw Error('bla')
  console.log('success');
} catch (error) {
  console.log(error);
} finally {
  console.log('final');
}

console.log('hurra')
