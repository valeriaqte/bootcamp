// src/app/layout.js
'use client';
import { Provider } from 'react-redux';
import store from './store/store';

export default function Layout({ children }) {
  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
