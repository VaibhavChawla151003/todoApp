
# Todo App

A full stack Todo list app made using the MERN stack. It has following features -


#### 1. Task management:

Users can create, edit, mark as completed and delete tasks. Tasks are associated with the logged-in user.

#### 2. User Authentication:

Users enter their registered email and password. The system validates the credentials and allows the user to enter the application
only when the user is registered.

#### 3. Logout

A logout button that allows users to log out of their accounts.

#### 4. User Inteface:

An intuitive user interface with a clean design for both the authentication and todo list parts of the application. It displays a list of tasks, each with options to edit and delete.

#### 5. Error Handling

Provide user-friendly error messages for scenarios such as incorrect login credentials, registration errors, or failed task updates.


#### 6. User-Specific Data
It ensures that each user can only see and manage their own tasks after logging in. Tasks should be associated with the user who created them.

#### 7. Database Integration:
It integrates a backend server and database to store user accounts and tasks securely. Implemented API endpoints for user registration, login, and task management.

# Authentication flow 

This application utilizes a robust authentication flow to verify the identity of users and ensure secure access to the system. The authentication flow is as follows:

#### 1. Registration:

Users create an account by providing necessary information (e.g.,name, email, password).

#### 2.Login:

Users enter their registered email and password.
The system validates the credentials and allows the user to enter the application
only when the user is registered.

#### 3.Protected Routes

Implement protected routes to ensure that only authenticated users can access the todo list.
## Installation

Run the following command to clone the repository

```bash
  git clone https://github.com/VaibhavChawla151003/todoApp.git
```
Go to client and server directory to install packages

```bash
  cd client
  npm install
```

```bash
  cd server
  npm install
```



## Configuration

Create .env file inside server directory and copy the following code

```bash
 PORT = 8080
 MONGO_URL = mongodb+srv://Learning_Geek:chawla@atlascluster.dmzgjbj.mongodb.net/todoApplication
```

## Run the App

Go to server and client directory and start the server

```bash
   cd server
   npm start
```

```bash
   cd client
   npm start
```
