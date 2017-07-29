var _ = require("lodash");

var Food = function(name, value) {
  this.name = name;
  this.value = value;
}

Food.prototype.value = function() {
  return this.value;
}




module.exports = Food;