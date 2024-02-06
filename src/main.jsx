import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import setLocalSettings from './App/appConfig';

async function render() {
  // await setLocalSettings();
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
}

render();