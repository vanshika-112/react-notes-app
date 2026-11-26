# 📝 React Notes App

A simple and interactive Notes App built using **React.js**. This project allows users to add, view, and delete notes dynamically using React's `useState` hook and two-way data binding.

## 🚀 Features

- **Add Notes:** Users can write and add new notes.
- **Display Notes:** All added notes are displayed on the screen.
- **Delete Notes:** Users can delete notes whenever they want.
- **useState Hook:** Manages the notes and input field state.
- **Two-Way Data Binding:** Keeps the input field value synchronized with React state.
- **Dynamic UI:** The user interface updates automatically whenever the state changes.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (`useState`)

## 📂 Project Structure

```text
notes-app/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project folder**

```bash
cd notes-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal (usually `http://localhost:5173/`).

## 💡 Concepts Used

### 1. useState Hook

The `useState` hook is used to manage the application state.

- Stores the input value.
- Stores the list of notes.
- Updates the UI whenever the state changes.

### 2. Two-Way Data Binding

Two-way data binding is implemented using the `value` and `onChange` attributes.

```jsx
<input
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>
```

Whenever the user types something, the state gets updated. Similarly, when the state changes, the input field displays the updated value.

### 3. Adding Notes

New notes are added to the notes array using the spread operator.

```jsx
setNotes([...notes, note]);
```

### 4. Displaying Notes

The `map()` method is used to display all notes dynamically.

### 5. Deleting Notes

The `filter()` method is used to remove a selected note from the array.

## 🎯 Learning Objectives

Through this project, I learned:

- How to use React's `useState` hook.
- How to manage state in functional components.
- How to implement two-way data binding.
- How to handle input events using `onChange`.
- How to render lists dynamically using `map()`.
- How to delete items using the `filter()` method.
- How React updates the UI when state changes.

## 🔮 Future Improvements

- Add edit functionality for existing notes.
- Store notes in Local Storage.
- Add timestamps to notes.
- Add search functionality.
- Improve the UI with responsive styling.

## 🎯 Project Purpose

The purpose of this project is to practice React basics like useState, two-way data binding, and event handling by creating a simple Notes App that allows users to add, view, and delete notes.

## 👨‍💻 Author

Created with ❤️.