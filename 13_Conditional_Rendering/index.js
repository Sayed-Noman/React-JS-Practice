import React from "react";
import { createRoot } from 'react-dom/client';

import App from './App'
import './style.css'

const root = createRoot(document.getElementById('root'));

const exampleProps = {
    user: { name: 'Alice' },
    isLoggedIn: true,
    status: 'loading',
    pageType: 'home',
    showMessage: true,
};

root.render(
    <React.StrictMode>
        <App {...exampleProps} />
    </React.StrictMode>
);