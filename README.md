ConnectIn
==========

A sample project for uploading an image and company details using react and react-redux.

## Installation

### Requirements

You would be using [npm](http://npmjs.com/) package manager with a module bundler like [Webpack](https://webpack.js.org/)

### How To install

```
git clone https://github.com/anjansarath/ConnectIn
cd ConnectIn
npm install
```

### Running The Project

```
npm run serve
```

## How Does It Work?

This project uses React and Redux architecture. It uses redux-form for sumbitting the company name and company description to [posttestserver.com](http://posttestserver.com/post.php?dir=example). It also uses react-file-input for selecting the file from the file system. It uses the modern browser's fetch api to do the POST requests. This project also uses material-ui for the UI.

When the user clicks on the submit button, the redux-form dispatches a SUBMIT_FORM action and the redux-saga catches this action and do a POST request to posttestserver.com using feth api. When the response comes, it prints the response to console and the saga dispatches a SUBMIT_SUCCESS action. The reducer catches this action and updates the state with 'isSubmitted' set to 'true'. Now the form component gets this updated state in mapStateToProps function and updates the props. This re-renders the form component and opens a "Submitted Successfully" dialog.

When the user selects a file and clicks on the upload icon, the form dispatches an UPLOAD_IMAGE action. The saga catches this action and uploads the image to posttestserver.com using fetch api and prints the response to the console.

The validation and error handling are not considered as of now.

## License

MIT
