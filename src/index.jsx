import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { createStorage } from './storage/storage.js'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

createStorage() // Create a storage if it doesnt exist
