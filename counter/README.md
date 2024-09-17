<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# 🎉 Counter Project

## 🚀 Overview

The **Counter Project** is a simple React application built using Vite. It showcases basic state management and event handling in React. This application features a counter with functionalities to increase or decrease the count while enforcing specific constraints.

## 🛠 Features

- 🆙 Increment the counter value up to a maximum of 20.
- 🔽 Decrement the counter value down to a minimum of 0.
- ⚠️ Alerts notify users when they attempt to exceed or drop below these limits.

## 📦 Installation

To get started with this project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Benkrish/React_1st.git
   cd counter
   ```
2. ** Install dependencies

Make sure you have Node.js installed. Then, run:
** npm install**
** npm run dev**
**This will start the Vite development server and open the application in your default browser.**
🔍 Usage
Once the development server is running, you can interact with the application through the following buttons:

Add Value ➕: Increases the counter value by 2, but prevents incrementing if the value is 20 or higher.


Decrease Value ➖: Decreases the counter value by 1, but prevents decrementing if the value is 0 or lower.

The current counter value is displayed and updated in real-time.



🧩 Code Overview
The main functionality is implemented in the App component:

State Management: Uses React's useState hook to manage the counter value.

Event Handlers:
addValue: Increments the counter by 2 if the value is less than 20.
decValue: Decrements the counter by 1 if the value is greater than 0.


🗂 Code Structure
src/
App.css - Contains basic styles for the application.
App.js - Main component with the counter functionality.


🤝 Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

