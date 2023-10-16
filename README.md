# NoteBot App

  <img align="right" src="https://github.com/HlaHusain/note_bot/blob/main/NoteBot%20logo.png" alt="App Icon" width="250">
  
## 📚 Description

- NoteBot is a web application that enables students to co-create lecture notes, supported by generative AI models (e.g., ChatGPT).

- It was initially developed by [Hla Abuhamra](https://github.com/HlaHusain), [Yusra Abdulrahman](https://github.com/Yusra-3033), [Hadeel Saleh](https://github.com/hadeelalzenaty-web), and [Hadil Khbaiz]() in the frame of the AWT course in summer semester 2023.

- It was created with React, Nodejs, Express, Mongoose, MongoDB Atlas, OpenAi, and ChatGPT `gpt-3.5-turbo` model.

<br><br>

### Demo: [Watch the video](https://www.youtube.com/watch?v=IPsVFVxYa80)

<br>

## ✨ Features

<img align="right" src="https://github.com/HlaHusain/note_bot/blob/main/Figma%20Screenshot.png" alt="App Icon" width="400">

<br>

- ✅ Note creation and organization​

- ✅ Note editing, viewing and downloading​

- ✅ Full note layout editor​

- ✅ AI-powered chatbot ​

- ✅ Search and filtering capabilities​

- ✅ User authentication and authorization

<br><br>

## 🖼️ Screenshots

<div style="display: flex;">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(9).png" alt="Screenshot 1" width="350">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(3).png" alt="Screenshot 2" width="350">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(5).png" alt="Screenshot 3" width="350">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(6).png" alt="Screenshot 4" width="350">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(7).png" alt="Screenshot 5" width="350">
  <img src="https://github.com/HlaHusain/note_bot/blob/main/localhost_3001_notes_64ab3ac627fbf48f13527db8%20(8).png" alt="Screenshot 6" width="350">
</div>

<br><br>

## 🏗️ Technical Architecture

<img align="right" src="https://github.com/HlaHusain/note_bot/blob/main/Screenshot%202023-08-08%20at%2021.24.49.png" alt="Tech Used" width="450" style="max-width:100%;">

### Database

- 🛢️ [MongoDB Atlas](https://www.mongodb.com/atlas)
- 📦 [Mongoose](https://mongoosejs.com/)

### Backend

- 🤖 [OpenAI](https://openai.com/)
- 💬 [ChatGPT](https://platform.openai.com/)
- ⚙️ [Express](https://expressjs.com/en)
- ⚙️ [Nodejs](https://nodejs.org/en)

### Frontend

- ⚛️ [React](https://react.dev/)
- 🎨 [Material UI](https://vitejs.dev/)

<br><br>

## 🚀 Installation

Clone the repository by clicking the green colored `Code` button and then click on `Open with GitHub Desktop`. Save the project to your desired location on your computer.

### Installation Guide for Backend

- Navigate to the `backend` directory using your file explorer

- Open a command prompt/terminal in the `backend` directory (with administration rights for Windows)

- Install nodemon globally `npm install -g nodemon` (only once)

- Create a new account in OpenAI and get your API key from [here](https://beta.openai.com/)

  - Once logged in, click on your name in the top right corner and select `View API keys`
  - Click on the button `Create a new secret key`. Give a name to the key and then copy it to your clipboard
  - In the `backend` directory, open `.env` file. Paste the API key between the quotation marks in the `OPENAI_API_KEY` variable

- To install Node packages, enter the following command in your command prompt or terminal (only once):

  ```bash
  npm ci
  ```

  In case you encounter issues with the `npm ci` command, you can try either of the following commands (only once):

  ```bash
  npm install
  ```

  OR

  ```bash
  npm install --force
  ```

- After successfully installing the packages, use the following command to start the server:

  ```bash
  npm start
  ```

### Installation Guide for Frontend

- Navigate to the `frontend` directory using your file explorer

- Open a command prompt/terminal in the `frontend` directory (with administration rights for Windows)

- To install Node packages, enter the following command in your command prompt or terminal (only once):

  ```bash
  npm ci
  ```

  In case you encounter issues with the `npm ci` command, you can try either of the following commands (only once):

  ```bash
  npm install
  ```

  OR

  ```bash
  npm install --force
  ```

- After successfully installing the packages, use the following command to start the server:

  ```bash
  npm start
  ```

That will open the project on your default browser: http://localhost:3001/.

### You can now create your own notes with AI assistance from your browser 😉

<br>

## 🚀 Deployment

### Backend Deployment​: [Render](https://note-api-axxd.onrender.com/)

 <img src="https://github.com/HlaHusain/note_bot/blob/main/Render.png" alt="Screenshot 6" width="600">

<br>

### Frontend Deployment​: [Vercel](https://note-bot-git-main-hlahusain.vercel.app/)

<img src="https://github.com/HlaHusain/note_bot/blob/main/Vercel.png" width="600">

<br><br>

## 👥 Group Members

- 👤 Hla Abuhamra​

- 👤 Yusra Abdulrahman​

- 👤 Hadil Khbaiz​

- 👤 Hadeel Saleh
