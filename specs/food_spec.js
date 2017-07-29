var assert = require("assert");
var Food = require("../food.js");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Rat = require("../rat.js");

describe("Food", function() {

beforeEach(function() {
  food = new Food("Pizza", 20)
  rat = new Rat("Evil Rat", true)
});

it("should have a name", function() {
  assert.strictEqual("Pizza", food.name)
})

it("should confirm is not infected at the beginning", function() {
  assert.strictEqual(false, food.infected)
})

it("should become infected by contact with rats", function() {
  assert.deepEqual(true, food.isNowInfected(rat));
})





})

