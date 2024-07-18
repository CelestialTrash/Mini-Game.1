<!-- # This is my Project
## This is a Subheading
### This is a subsubheading

if we want to add a piece of code.

```javascript
console.log("helloWorld")
``` -->



# Shadowbound

[Deployed Version](https://celestialtrash.github.io/Mini-Game.1/)

## Description

Shadowbound is an atmospheric puzzle game set in a mysterious and eerie limbo. Players take on the role of a character trapped in a dark and foreboding hospital-like environment, filled with lurking dangers and unsettling enemies. The goal is to navigate through the darkness, using a flashlight sparingly to reveal the path ahead and avoid detection by the enemies that are drawn to the light.

As the player, you must carefully plan your movements, toggling the flashlight on and off to find your way while evading enemies that react to the light. The environment is filled with ominous sounds and a chilling atmosphere, enhancing the sense of dread and urgency as you attempt to escape the limbo.

## Project Planning

### Monday: Setting Up the Basics

#### Tasks

- **HTML Structure:**
  - Create the basic HTML structure.
  - Add a section for the game area.
  - Create a div with id="player" to represent the player character.

- **CSS Styling:**
  - Basic styling for the game area and player character.

- **JavaScript:**
  - Create a JavaScript file for player movement logic.
  - Create a JavaScript file to handle keypress/keyup events.

#### Goals

- Have a basic HTML structure.
- Implement player movement on the board using key events.

### Tuesday: Adding Game Elements and Basic Interaction

#### Tasks

- **Enemies:**
  - Add multiple divs for enemies with unique ids or classes.
  - Style enemies in CSS to distinguish them from the player.

- **Lantern Logic:**
  - Implement the flashlight functionality to toggle visibility.
  - Add a light radius effect around the player when the lantern is on.

- **Enemy Movement:**
  - Implement basic logic for enemies to follow the player when the lantern is on.
  - Ensure enemies stop following when the flashlight is off.

#### Goals

- Have enemies on the board.
- Implement the lantern logic.
- Make enemies follow the player when the lantern is on.

### Wednesday: Advanced Game Mechanics and Polishing

#### Tasks

- **Collision Detection:**
  - Implement collision detection between the player and enemies.
  - Define game-over conditions when the player is caught by an enemy.

- **Winning Conditions:**
  - Define the goal point the player needs to reach.
  - Implement the winning logic when the player reaches the goal.

- **Game Aesthetics:**
  - Add more styling to improve the game’s look and feel.
  - Implement animations for the player and enemies.

- **Sound Effects:**
  - Add sound effects for player movement, flashlight toggling, and enemy detection.

#### Goals

- Implement collision detection and game-over conditions.
- Define and implement winning conditions.
- Improve the game's aesthetics and add sound effects.

### Thursday: Testing and Final Touches

#### Tasks

- **Testing:**
  - Thoroughly test the game for bugs and ensure all features work as expected.
  - Ensure the game works across different browsers.

- **Final Adjustments:**
  - Make any necessary adjustments based on testing feedback.
  - Optimize the game for performance.

- **Presentation Preparation:**
  - Create a presentation outlining the game’s concept, development process, and features.
  - Prepare a live demo of the game.
  - Create a brief walkthrough or tutorial for the game.

#### Goals

- Ensure the game is fully functional and bug-free.
- Finalize the presentation materials and prepare for the demo.

## Challenges

One of the most challenging aspects of developing Shadowbound was implementing the enemy behavior so that they are drawn to the light. This involved complex logic to detect when the enemies were within the light radius and to make them follow the player accordingly. Additionally, creating the effect where the flashlight's light cuts a circle to show the game area while the rest remains dark was particularly difficult to achieve.

## Upgrades

Looking ahead, there are several upgrades I would like to make to the game:

- **Enhanced Enemy logic:** Improve the enemies' behavior to include more complex patterns and reactions to the player's actions.
- **Level Design:** Add multiple levels with increasing difficulty and more complex puzzles.
- **Power-ups and Items:** Introduce power-ups and items that the player can collect to aid in their escape.
- **Rich Sound Design:** Enhance the game’s atmosphere with more detailed and immersive sound effects and background music.
- **Graphics and Animations:** Upgrade the graphics and animations to enhance the visual experience.

[Deployed Version](https://celestialtrash.github.io/Mini-Game.1/)