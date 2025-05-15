# React Project

## Description
This project is a React-based web application that includes navigation, tasks, and data fetching. It utilizes Bootstrap for styling and Axios for API requests.

## Features
- **Navigation Bar:** Provides links to Home, Task 1, and Task 2 pages.
- **Task 1:** Displays a table of user data fetched from an API.
- **Task 2:** Shows randomized images from an API.
- **Home Page:** Cards linking to different task pages.
- **404 Page:** Displays an error message for unknown routes.

## Installation
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
├── public
│   ├── index.html
│   └── assets
├── src
│   ├── components
│   │   ├── Navbar_main.js
│   │   ├── Task1.js
│   │   ├── Task2.js
│   │   ├── Task2.js
│   │   ├── task2.png
│   │   ├── task2.png
│   │   ├── Home.js
│   ├── App.js
│   ├── index.js
│   ├── styles
├── package.json
└── README.md
```

## Technologies Used
- React.js
- React Router
- Bootstrap
- Axios
- JSONPlaceholder API

## Usage
- Navigate to different sections using the navigation bar.
- View user details in Task 1.
- Explore random images in Task 2.

## Deployment
To deploy the project:
```sh
npm run build
```
Then, host the generated `build` folder on a web server or platform like Netlify or Vercel.

## License
This project is licensed under [license](/license).
