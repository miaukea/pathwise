import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';  // Import service worker

ReactDOM.render(<App />, document.getElementById('root'));

// Register the service worker
serviceWorkerRegistration.register();

