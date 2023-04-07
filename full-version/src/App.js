// This is the main component of the application that renders the content.
// It imports React and the Suspense component from the 'react' library, as well as the Router component from the './router/Router' module.
// The Suspense component is used to provide a fallback UI while the application is loading.
// The App component renders the Router component inside a Suspense component, which will handle any asynchronous loading of components that are part of the Router.
// Finally, the App component is exported as the default component.

import React, { Suspense } from 'react';
import Router from './router/Router';

const App = () => {
return (
<Suspense fallback={null}>
<Router />
</Suspense>
);
};

export default App;