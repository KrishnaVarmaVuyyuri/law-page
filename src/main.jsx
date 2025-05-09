import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Remove the <BrowserRouter> wrapping here
createRoot(document.getElementById('root')).render(
    <Provider store={store}> {/* Wrap the app with Redux provider */}
        <App /> {/* App is already wrapped with BrowserRouter */}
    </Provider>
);
