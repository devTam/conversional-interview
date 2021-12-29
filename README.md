# React Component Builder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Load JSON files

### Add New JSON files

JSON files can be found in the src directory under utils folder.
To add JSON files you need to use the same data structure as the examples files (data.json, data2.json) in the folder.

### Load JSON files

To load the Files, import the file in the App.js component inside the src directory and pass the file as a parameter to the `renderComponent` function.

## Additional requirement

To trigger opening of the Modal component using one of your Button or Link components, do the following:

* Delete the `isOpen` property in the props field of the Modal component in your JSON file.

* Add a `triggerModal` property to the props field of the Button/Link component in your JSON file. 

* Example of this is the `data3.json` file in the utils folder.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



