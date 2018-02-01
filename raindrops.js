/*var Raindrops = function() {
  this.convert = function(number) {
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {return 'PlingPlangPlong'}
    if (number % 3 === 0 && number % 5 === 0) {return 'PlingPlang'}
    if (number % 3 === 0 && number % 7 === 0) {return 'PlingPlong'}
    if (number % 5 === 0 && number % 7 === 0) {return 'PlangPlong'}
    if (number % 3 === 0) {return 'Pling'}
    if (number % 5 === 0) {return 'Plang'}
    if (number % 7 === 0) {return 'Plong'}
    else {
        return number.toString();
    }
  }
}*/

var Raindrops = function() {
  this.convert = function(number) {
    var result = '';
    if (number % 3 === 0) {result += 'Pling'}
    if (number % 5 === 0) {result += 'Plang'}
    if (number % 7 === 0) {result += 'Plong'}
    if (result !== '') {return result}
    else {
        return number.toString();
    }
  }
}

module.exports = Raindrops;
