# INF655 - Assignment 1: React JSX and Components

A React application demonstrating JSX and React components (functional and class-based).

## Tasks Completed

### Task 1: Greeting Component (Functional)
- **File:** `src/components/Greeting.jsx`
- Uses JSX with an `<h1>` greeting message
- Paragraph `<p>` with inline style
- JavaScript expression for current date via `new Date().toLocaleDateString()`

### Task 2: UserInfo Component (Class)
- **File:** `src/components/UserInfo.jsx`
- Class component with state for user name and profession
- JSX `<div>` with user details
- Displays a random lucky number in state

### Task 3: Dynamic Content (Tasks)
- **File:** `src/App.jsx`
- Array of tasks in App
- `getRandomTask()` returns a random task from the list
- Random task displayed in `<h3>` via `TaskComponent`

### Task 4: Parent and Child Components
- **File:** `src/App.jsx`
- Imports `Greeting`, `UserInfo`, and `TaskComponent`
- Renders all three inside a single `<div>` (JSX rules)

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
```

## Push to GitHub

1. Create a new repository on GitHub (e.g. `inf655-assignment-1-react`).
2. Ensure the repository is **public**.
3. From the project folder:

   ```bash
   git init
   git add .
   git commit -m "INF655 Assignment 1: React JSX and components"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. Submit the GitHub repository link (e.g. `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`).
