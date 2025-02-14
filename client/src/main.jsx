// Import React and StrictMode for best practices.
import { StrictMode } from 'react';

// Import createRoot from ReactDOM for rendering the application.
import { createRoot } from 'react-dom/client';

// Import global styles.
import './index.css';

// Import the main App component.
import App from './App.jsx';

// Import the service worker registration function.
import { registerServiceWorker } from './serviceWorker'; 

// Create a root element and render the App component inside StrictMode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Register the service worker for PWA capabilities.
registerServiceWorker();

