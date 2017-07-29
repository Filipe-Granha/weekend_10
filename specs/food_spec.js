var assert = require("assert");
var Food = require("../food.js");
var Hero = require("../hero.js");
var Task = require("../task.js");

describe("Food", function() {

beforeEach(function() {
  food = new Food("Pizza", 20)
});

it("should have a name", function() {
  assert.strictEqual("Pizza", food.name)
})






})

