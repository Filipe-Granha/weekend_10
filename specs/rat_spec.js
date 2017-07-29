var assert = require("assert");
var Food = require("../food.js")
var Hero = require("../hero.js")
var Task = require("../task.js")
var Rat = require("../rat.js");

describe ("Rat", function() {


beforeEach(function() {
  rat = new Rat("Evil Rat", true)
})

it("should have a name", function() {
  assert.strictEqual("Evil Rat", rat.name)
})




})