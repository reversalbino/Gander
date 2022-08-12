Welcome to my (almost) full-stack solution to add two numbers! To get started, please follow these instructions.

1. Install dependencies from the root directory (alternatively, you could run this command in both the frontend and backend directories, but I have added a script that will install both from the root directory. if you want to see that command, check out the package.json file and look at the 'scripts' section)
```
npm install
```
2. Navigate to the backend directory (/Gander/backend) and start the services
```
npm start
```
3. In a new terminal, navigate to the frontend directory and run the same command. This should open the browser and direct you to the project. If not, navigate to http://localhost:5000

4. You should now be able to use the application!

{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "js-cookie": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.8",
    "react-router-dom": "^5.3.3",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1"
  },
  "proxy": "http://localhost:5000",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "redux-logger": "^3.0.6"
  }
}
