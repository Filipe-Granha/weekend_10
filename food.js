var _ = require("lodash");

var Food = function(name, value) {
  this.name = name;
  this.value = value;
  this.infected = false
}

Food.prototype.value = function() {
  return this.value;
}

Food.prototype.isNowInfected = function(rat) {
  if(rat.touchedFood === true)
    return this.infected = true
}





module.exports = Food;