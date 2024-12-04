# Task Management System

A simple task management system built with **Node.js** (Express) for the backend and **React.js** for the frontend. This application allows users to:
- View a list of tasks.
- Add new tasks.
- Mark tasks as completed.
- Delete tasks.

## Features
- **Task List**: View all tasks in a list format.
- **Add Task**: Add a new task by providing a title and optional description.
- **Mark Task Completed**: Mark a task as completed with a simple toggle.
- **Delete Task**: Delete tasks from the list.

---

## Technologies Used
- **Frontend**: React.js, Material UI (for UI components and styling)
- **Backend**: Node.js, Express.js, SQLite (for database storage)
- **API**: RESTful API for communication between frontend and backend

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)

### Clone the Repository

```bash
git clone https://github.com/MohamedTarawa/task-management-system.git
cd task-management-system

npm install
node server.js

# The backend API will be available at http://localhost:3001.

### In a new terminal window Navigate to the task-management-frontend folder
npm install
npm start

## The frontend will be running now

# Assumptions and Decisions
Frontend: The frontend is built using React.js. The app uses Material-UI for modern, responsive components and design.
Backend: The backend uses Node.js with the Express framework. Tasks are stored in an SQLite database by default, but it can be easily replaced with another database (MongoDB) if needed.
API: A RESTful API is used to handle the communication between the frontend and backend.
