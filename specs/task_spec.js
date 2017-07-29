var assert = require("assert");
var Food = require("../food.js");
var Task = require("../task.js");
var Hero = require("../hero.js");


describe("Task", function() {

beforeEach(function() {
  task = new Task(10, 5, 20)
})

it("should have a difficulty level", function() {
  assert.strictEqual(task.difficulty, 10)
});


})