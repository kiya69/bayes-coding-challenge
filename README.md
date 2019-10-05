This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Describe your choices and decisions in a few words
I decided to use Raact as it is the most familiar library for me. I like it because of its flexibility with component manipulation and the simplicity of file structure.

#### A few main points in my decisions throughout coding this project:
- Firstly, I drew out the wireframe of how I want the project look like and split each element into designated component.
- I decided to split the start date and end date into a simpler format in TournamentItem.js by  taking only the date in jsx for ease of reading. I didn't change the value of it in the state because I think it might be something important at some point. Moreover, by keeping its original format, users can still see the exact date and time when they see the tournament details.
-  I didn't implement the feature for filtering out by dates because it's a little ambiguous for me as I am not sure if the requirement is to filter a range of the dates or just tournament starts after certain date or before the end date.
- I use a constant "TOURNAMENT_HEADERS" so that if we need to change any name of each item, we can just change it there once, and I sure did change some of them a few times.

## Quickstart
`npm install`

`npm start`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
