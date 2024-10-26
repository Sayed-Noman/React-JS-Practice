// src/components/App.js
import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import UserProfile from './components/UserProfilePage';
import StatusMessage from './components/StatusMessage';

function App({ user, isLoggedIn, status, pageType, showMessage }) {
    return (
        <div className="app-container">
            {/* 1. Using if-else Statements */}
            <div className={isLoggedIn ? 'welcome-message' : 'login-message'}>
                {
                    (() => {
                        if (isLoggedIn) {
                            return <h1>Welcome back!</h1>;
                        } else {
                            return <h1>Please sign in.</h1>;
                        }
                    })()
                }
            </div>

            {/* 2. Ternary Operator */}
            <h2 className={isLoggedIn ? 'welcome-message' : 'login-message'}>
                {isLoggedIn ? 'You are logged in!' : 'You are logged out!'}
            </h2>

            {/* 3. Logical AND Operator */}
            <div className="conditional-message">
                {showMessage && <p>This is a conditional message!</p>}
            </div>

            {/* 4. Inline Conditional Rendering */}
            <div className="user-profile">
                <UserProfile user={user} />
            </div>

            {/* 5. Using Switch Statement for Status Messages */}
            <div className="status-message">
                <h3>Status</h3>
                <StatusMessage status={status} />
            </div>

            {/* 6. Rendering Different Components */}
            <div className="current-page">
                <h3>Current Page</h3>
                {
                    (() => {
                        switch (pageType) {
                            case 'home':
                                return <HomePage />;
                            case 'about':
                                return <AboutPage />;
                            default:
                                return <NotFoundPage />;
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default App;