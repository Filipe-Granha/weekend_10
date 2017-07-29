var _ = require('lodash');


var Hero = function(name, favFood) {
  this.name = name;
  this.health = 100;
  this.stomach = []
  this.favFood = favFood;
  this.tasks = [];
  this.tasksCompleted = []
  this.talks = function(heroWords) {
    return heroWords;
  }
}

Hero.prototype.increaseHealth = function (food) {
 hero.stomach.push(food);
 this.health += food.value
}

Hero.prototype.favFoodExtraHealth = function(food) {
    hero.stomach.push(food);
    if(food.name === this.favFood)
    this.health += food.value * 1.5
}

//works, but within UNICODE limitations
Hero.prototype.sortTasksByDifficulty = function() {
  this.tasks.sort(function(a,b) {
      if ( a.difficulty < b.difficulty )
          return -1;
      if ( a.difficulty > b.difficulty )
          return 1;
      return 0;
  } );
}
 
//works, but within UNICODE limitations 
Hero.prototype.sortTasksByUrgency = function() {
  this.tasks.sort(function(a,b) {
      if ( a.urgency > b.urgency )
          return -1;
      if ( a.urgency < b.urgency )
          return 1;
      return 0;
  } );
}

//works, but within UNICODE limitations
Hero.prototype.sortTasksByReward = function() {
  this.tasks.sort(function(a,b) {
      if ( a.reward < b.reward )
          return -1;
      if ( a.reward > b.reward )
          return 1;
      return 0;
  } );
}

Hero.prototype.setTaskToCompleted = function(task) {
   //should not include push(task), because we might want to add a task to the list, without setting it immediately to completed
       for (i = 0; i < this.tasks.length; i++) {
           if (this.tasks[i] === task) {
               task.completed = true
           }
       }
}

Hero.prototype.moveTaskToCompletedTasks = function(task) {
  if(task.completed === true)
    this.tasksCompleted.push(task)
    this.tasks.splice(task, 1);
    return null
}

Hero.prototype.eatsPoisonousFood = function(food) {
  food.isNowInfected(food)
  hero.stomach.push(food);
  this.health -= food.value
}

Hero.prototype.viewCompletedTasks = function() {
  return this.tasksCompleted
}




module.exports = Hero;