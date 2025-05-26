# Javier Sosa Fuch's Portfolio

Welcome to the repository for Javier Sosa Fuch's personal portfolio website! This project showcases my skills, experience, and projects as a developer.

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [License](#license)

---

## About

This portfolio is a dynamic and responsive web application built with **React** and **TypeScript**. It serves as a central hub to display my professional journey, including my experiences, projects, education, and the technologies I'm proficient in. The site is designed to be user-friendly and visually appealing, adapting to various screen sizes.

---

## Version 1.0.0

---

## Features

* **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile screens.
* **Dynamic Content:** Swapping sections for an engaging user experience in the welcome area.
* **Modular Components:** Built with reusable React components for maintainability.
* **Modern UI:** Utilizes **Tailwind CSS** for rapid and consistent styling.
* **Redux Toolkit:** For efficient state management.

---

## Technologies Used

This project leverages a modern front-end stack:

* **React.js:** A JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
* **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
* **Tailwind CSS:** A utility-first CSS framework for quickly building custom designs.
* **Vite:** A fast build tool that provides a lightning-fast development experience.
* **Git & GitHub:** For version control and collaborative development.

---

## Installation

To get a copy of this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SFJavierE/portfoliojavier.git](https://github.com/SFJavierE/portfoliojavier.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd portfoliojavier
    ```
3.  **Install the dependencies:**
    This project uses `npm`.
    ```bash
    npm install
    ```
    Alternatively, if you prefer `Yarn`:
    ```bash
    yarn install
    ```

---

## Usage

Once the dependencies are installed, you can run the development server or build the project for production.

### Development Mode

To start the development server:

```bash
npm run dev
# or
yarn
 dev
```

---

## Project Structure
```bash
src/
├── assets/                  # Static assets like images
├── components/              # Reusable UI components
├── context/                 # React Context providers (e.g., LanguageContext)
├── interfaces/              # TypeScript interface definitions
├── sections/                # Major sections of the portfolio (e.g., Welcome, AboutMe)
├── store/                   # Redux store configuration and slices
│   └── slices/              # Individual Redux slices (e.g., languageSlice)
├── utils/                   # Utility functions and helper modules
│   ├── i18n/                # Internationalization utilities (e.g., languageDetector)
│   ├── lists/               # Data lists (experiences, projects, etc.)
│   └── translates/          # JSON translation files (e.g., en/translate.json)
└── App.tsx                  # Main application component
└── main.tsx                 # Entry point of the React application
```
---

## License
This project is open source and available under the MIT License.
