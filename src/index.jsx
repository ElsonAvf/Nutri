import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import { createStorage } from './storage/storage.js'

createStorage() // Create storage if it doesnt exist

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
