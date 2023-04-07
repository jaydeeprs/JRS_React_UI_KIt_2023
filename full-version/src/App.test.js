// This is a test file that uses Jest and the React-DOM library to verify that the App component can be rendered without crashing.

import ReactDOM from 'react-dom';
import App from './App';

// The test function takes a description string and a function to execute the test.
// In this case, the test function checks that the App component can be rendered without crashing.
it('renders without crashing', () => {
  // First, create a new div element using the document.createElement() method.
  const div = document.createElement('div');

  // Then, render the App component inside the div element using the ReactDOM.render() method.
  ReactDOM.render(<App />, div);

  // Finally, use the ReactDOM.unmountComponentAtNode() method to unmount the component after the test has finished running.
  ReactDOM.unmountComponentAtNode(div);
});

// If the App component fails to render or crashes, the test will fail.