# 🔀 Conditional Rendering — React Demo

A React project demonstrating various techniques for conditionally rendering UI components.

## About

This project explores one of the most fundamental patterns in React: rendering different UI elements based on application state or props. It serves as a practical reference for developers learning how to control what gets shown on screen depending on conditions.

## What You'll Learn

- Rendering components with `if/else` statements
- Using the ternary operator (`condition ? A : B`) for inline rendering
- Using the logical `&&` operator for short-circuit rendering
- Conditionally applying CSS classes
- Toggling UI elements based on state

## Tech Stack

- **React** — UI and state management
- **Vite** — Development server and build tool
- **JavaScript / JSX**
- **CSS**

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/iankala/conditional-rendering.git
   cd conditional-rendering
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
conditional-rendering/
├── src/            # React components
├── public/         # Static assets
├── index.html      # Entry point
└── vite.config.js  # Vite configuration
```

## Key Concepts

```jsx
// Ternary rendering
{isLoggedIn ? <Dashboard /> : <Login />}

// Short-circuit rendering
{hasError && <ErrorMessage />}

// if/else in component
if (loading) return <Spinner />
return <Content />
```

## Author

**Ian Kala** — [GitHub](https://github.com/iankala)
