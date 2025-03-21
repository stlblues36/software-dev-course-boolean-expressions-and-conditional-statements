/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;
const hasCompass = true;

console.log("You find yourself standing at a crossroads.");
console.log("There are two paths: one leads to the mountains, and the other leads to the village.");

// Ask the user to make a choice between mountains and village
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  console.log("You chose the path to the mountains.");

  // Nested condition for mountain path
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains with your torch.");
    
    // Further choices after entering the mountains
    const mountainAction = readline.question("You reach a fork in the road. Do you go left or right? ");
    if (mountainAction === "left" && hasSword) {
      console.log("You fight off a wild animal with your sword and continue safely.");
    } else if (mountainAction === "right" || !hasSword) {
      console.log("You encounter a wild animal, but you manage to escape safely.");
    } else {
      console.log("You stand still, and the animal gets the better of you. You lose.");
    }

  } else {
    console.log("It's too dark to continue. You decide to turn back.");
  }

} else if (choice === "village") {
  console.log("You chose the path to the village.");

  // Conditional for village path
  if (hasMap || hasCompass) {
    console.log("You find your way to the village with the help of your map or compass.");
    
    // Further scenario: You arrive at the village and make a new decision
    const villageAction = readline.question("You arrive at the village. Do you want to enter the inn or explore the market? ");
    
    if (villageAction === "inn" && hasTorch) {
      console.log("You enter the inn and rest by the fire, thanks to your torch.");
    } else if (villageAction === "market" && hasCompass) {
      console.log("You visit the market and find some valuable items with the help of your compass.");
    } else {
      console.log("You wander around aimlessly and don't find anything of interest.");
    }

  } else {
    console.log("You don't have a map or compass, and you get lost on the way to the village.");
  }

} else {
  console.log("You get confused and wander aimlessly, unsure of which path to take.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/