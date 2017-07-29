var assert = require("assert");
var Food = require("../food.js");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Rat = require("../rat.js");


describe("Hero", function() {


  beforeEach(function() {
    hero = new Hero("WonderAndy", "Porridge")
    task1 = new Task(1, 1, 3, false)
    task2 = new Task(2, 4, 3, false)
    task3 = new Task(3, 3, 1, false)
    food1 = new Food("Pizza", 30, false)
    food2 = new Food("Porridge", 50, false)
  });



it("should have a name", function() {
  assert.strictEqual("WonderAndy", hero.name)
});

it("should have a favFood", function() {
  assert.strictEqual("Porridge", hero.favFood);
});

it("should be able to talk", function() {
  assert.strictEqual("I'm WonderAndy!", hero.talks("I'm WonderAndy!"));
})

it("should be able to eat food", function() {
  hero.stomach.push(food1);
  assert.strictEqual(food1, hero.stomach[0]);
})

it("health should go up by food's replenishment value", function() {
  hero.increaseHealth(food1)
  assert.strictEqual(130, hero.health);
})

it("if food = favFood, then replenishment value * 1,5", function () {
  hero.favFoodExtraHealth(food2);
  assert.strictEqual(175, hero.health);
})

it("should start with 0 tasks", function() {
  assert.deepEqual(0, hero.tasks.length);
});

it("should be able to add tasks", function() {
hero.tasks.push(task1);
hero.tasks.push(task2);
assert.deepEqual(task1, hero.tasks[0]);
})

it("should be able to sort tasks by difficulty, urgency or reward", function() {
  hero.tasks.push(task3);
  hero.tasks.push(task2);
  hero.tasks.push(task1);
  //COMMENT OUT EACH OF THE FOLLOWING 3 LINES FOR EACH TEST:
  hero.sortTasksByDifficulty();
  // hero.sortTasksByUrgency();
  // hero.sortTasksByReward();
  assert.deepEqual(task1, hero.tasks[0]);
})

it("should set task to completed", function() { 
  hero.tasks.push(task1);
  hero.tasks.push(task3);
  hero.setTaskToCompleted(task3);
  assert.strictEqual(task3.completed, hero.tasks[1].completed )
})

it("should move completed task to completed tasks", function() {
  hero.tasks.push(task1);
  hero.tasks.push(task2);
  hero.tasks.push(task3);
  hero.setTaskToCompleted(task1);
  // hero.setTaskToCompleted(task2);
  hero.setTaskToCompleted(task3);
  hero.moveTaskToCompletedTasks(task1);
  // hero.moveTaskToCompletedTasks(task3);
  assert.deepEqual(task1, hero.tasksCompleted[0]);
  assert.deepEqual(2, hero.tasks.length);
  assert.deepEqual(1, hero.tasksCompleted.length);
})

it("should decrease health if eating poisonous food", function() {
  hero.eatsPoisonousFood(food1);
  assert.deepEqual(70, hero.health);
})

it("should be able to view completed tasks", function() {
  hero.tasks.push(task1);
  hero.tasks.push(task2);
  hero.tasks.push(task3);
  hero.setTaskToCompleted(task1);
  hero.setTaskToCompleted(task2);
  hero.moveTaskToCompletedTasks(task1);
  hero.moveTaskToCompletedTasks(task2);
  assert.strictEqual(2, hero.viewCompletedTasks().length)
})



})

