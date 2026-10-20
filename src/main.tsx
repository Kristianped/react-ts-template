import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App.tsx';
// @ts-ignore
// oxlint-disable-next-line
import * as bootstrap from '@/bootstrap/bootstrap-loader.js';

import './main.css';

import { store } from '@/store/store.ts';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
