# 💰 React Treasure Hunt Game

#### Overview

Treasure Hunt is the first project that students create at LEARN. During Jumpstart, treasure hunt is done with HTML, CSS, and JavaScript. While this is a perfectly acceptable tech stack, using React allows for more advanced and dynamic code structures.

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

#### Learning Objectives

- can create a logic component to handle the gameplay
- can pass data and behavior from a parent component to a nested component with props
- can break down a complex problem to create a desired outcome

#### Additional Resources

- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- Accept the assignment from GitHub classroom
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game, and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.

branch: treasure-branch
-mapped over array in state to dynamically render 9 squares
-styled the board
-passed value of state to square
-styled squre

- As a user, when I click on one of the question marks, an alert appears with the index position of that question mark in the array.

branch: treasure-branch
-added onClick to square div
-created handleClick method to Square
-passed the index to Square and handleClick
-added handleSquareClick to App.js
-passed handleSquareClick to Square to get the index back to App.js (using fucional props)

- As a user, when I click on one of the question marks, a tree emoji appears instead of the alert.

branch: story-3
-made copy of board using the spread operator
-updated value of a square at particular index to be a tree

- As a user, if I select the winning square, the question mark will become a treasure emoji. If I select the losing square, the question mark will become a bomb emoji.

branch: story-4
-passed a random value in a new state to determine the location of the treasure
-passed a random value in a another new state to determine the location of a bomb

- As a user, I can click on a “Play Again” button that will restart the game.

branch: story-5
-created a new component <RestartButton />
-made onClick to RestartButton<button>
-added restartButtonPressed to App.js to trigger map back to original state
-Split the original array useState so it has a variable to pull the state from which made a reset point for restartButtonPressed.
-added formating to App.css to center the button

- As a user, I can see a counter that shows how many guesses are remaining. The counter starts at five and decrements by one every time I click on a square that is neither the treasure nor the bomb.

branch: story-6
-created a new component <Counter />
-created a new useState to contain the value of Counter starting at 5
-added a statement subtract 1 from clickCounter and update setClickCounter state inside tree else statement
-added a statement to setting clickCounter to 5 by updating setClickCounter state inside the reset function

- As a user, I can see a message stating that I won the game by selecting the square that contains the treasure.
- As a user, I can see a message stating that I lost the game by selecting the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
