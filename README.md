### TypeScript Hangman Game

This project is a TypeScript-based React application designed to help you learn and practice TypeScript within a real-world scenario. The game follows the classic Hangman format, where players guess letters to uncover a hidden word, but with a strong emphasis on type safety and code reliability provided by TypeScript.

#### Key Learning Objectives:

1. **Type-Safe State Management**:
   - Learn how to manage state with TypeScript, ensuring variables like the word to guess, score, and lives are correctly typed. This reduces bugs and improves code clarity.

2. **Typed Function Handling**:
   - Understand how to define and work with functions that are strictly typed, particularly in scenarios involving user input, such as guessing letters. This helps prevent errors and makes the application more robust.

3. **Component Prop Typing**:
   - Practice creating and using typed React components. By enforcing types for props, you ensure that data passed between components is consistent and valid, leading to a more predictable and maintainable codebase.

4. **Enhanced Error Checking**:
   - With TypeScript's strict mode enabled, experience how early error detection can improve development workflow, catching potential issues before they become bugs.

#### Application Flow:

- **Game Logic**: The game dynamically selects a random word, tracks the player's guesses, and updates the game state (score, lives, etc.) based on correct or incorrect guesses.
- **User Interaction**: Players can guess letters using both a physical keyboard and an on-screen virtual keyboard, with TypeScript ensuring that all interactions are handled safely.
- **End Conditions**: The game displays appropriate win/loss messages, and TypeScript ensures that the logic for these conditions is correctly implemented.
