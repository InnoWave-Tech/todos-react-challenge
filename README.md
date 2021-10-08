# React Coding Challenge

## Setup

`npm i` and `npm run dev`

## Get started

You'll be implementing a simple Todo app.

Users can interact with the application in the following ways:

- See a list of Todos
- Create a new Todo
- Toggle done/undone state of each Todo

## Project structure

The project is a single page Next.js app.

- `pages/index` is the root React component of the application.
- `lib/components/*` contains the React components.
- `lib/db` implements the simulated Todo database functionality.

## HTTP Todos API

There is an API running on this project:

- `GET /api/todos` - fetches all the todos
- `POST /api/todos/new` - creates a new todo
  - the body of the request should look like `{"title": "My new todo"}`
  - For this exercise, a todo with title `error` will trigger a `500` response!
- `PUT /api/todos/[id]` - toggles the todo as done/undone

Some notes:

- This API should be considered external and done, you won't have to change anything under `pages/api`.
- The API internally uses the functions in `lib/db.js`.
- All methods return the updated todos list as a response (hint: you can use this to sync up your React application).
- Your React components should communicate with this API to manage the Todos.

## Tasks

Please implement the following tasks:

- [ ] Fill in `getTodos`, `createTodo` and `toggleDone` in `lib/db.js`
- [ ] Implement the Todo React component
  - Display the todo item in both done/undone states
  - Implement the toggle feature
- [ ] Complete the App root React component
  - Render the list of todos, showing the undone ones first
  - Render the AddTodoForm
- [ ] Implement the AddTodoForm React component
  - The user should not be able to create a new todo if the input box is empty
  - When clicked, the button should create a new todo
  - If there was an error creating a new todo, display the error message provided by the server (to test, create a todo with title `"error"`)

For the React components, `styles/globals.css` will guide you on the expected HTML markup to render. **You shouldn't need to change any CSS.**

**Note: You can see some images of the final application in `images/*.png`.**
