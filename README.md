# Smart Utility Toolkit

Lab Assignment 1 - Web Dev III (Node.js & Express Backend)

## How to Run

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

### 2. Custom Module Demo (isEven + logger)
```
node app.js
```

### 3. HTTP Server
```
node server.js
```
Then open in browser:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/anything (404)

### 4. File Manager (fs module)
```
node fileManager.js
```
Creates, reads, updates, and deletes `test.txt` step by step.

### 5. Dice Generator (crypto module)
```
node dice.js
```
Rolls the dice 5 times using secure randomness.

## Folder Structure
```
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```
