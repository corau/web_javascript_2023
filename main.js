// console.log('Test');

/**
 * Prozeduren
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
