My Notes App 📝
A clean and simple web app for taking notes. It lets you create an account, log in securely, and keep track of your thoughts. I built this using React for the front end and Node.js/Express for the back end, with MongoDB storing all the data.

What it Does
User Accounts: You can sign up and log in. Your notes are private and only visible to you.

Create Notes: Quickly type a title and description to save a new note.

Delete Notes: Clean up your list by deleting notes you don't need anymore.

Clean Design: A minimal, modern UI that stays out of your way.

How to Run It
1. Set up the Backend
Open the folder in your terminal.

Run npm install to get the dependencies.

Create a .env file and add your:

MONGOOSE_KEY (Your MongoDB link)

JWT_SECRET (A random string for security)

Start the server with npm start (usually on port 3000).

2. Set up the Frontend
Open the frontend folder.

Run npm install.

Start the app with npm run dev.

Open http://localhost:5173 in your browser.

Tech Used
Frontend: React, Tailwind CSS, Axios.

Backend: Node.js, Express, MongoDB, JWT (for login).