const RegistrationForm = () => {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '4px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    };

    const imgStyle = {
        display: 'block',
        margin: '0 auto 20px',
        width: '100px', // Set desired width
        height: '90px'  // Keep aspect ratio
    };

    return React.createElement(
        'section', { className: 'registration-form' },
        React.createElement('img', { src: 'register-image.png', alt: 'Register', style: imgStyle }),
        React.createElement('h1', { style: { textAlign: 'center', color: '#333' } }, 'Register'),
        React.createElement('form', { style: formStyle },
            React.createElement('label', { htmlFor: 'username' }, 'Username'),
            React.createElement('input', {
                type: 'text',
                id: 'username',
                name: 'username',
                required: true,
                style: inputStyle
            }),
            React.createElement('label', { htmlFor: 'email' }, 'Email'),
            React.createElement('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                required: true,
                style: inputStyle
            }),
            React.createElement('label', { htmlFor: 'password' }, 'Password'),
            React.createElement('input', {
                type: 'password',
                id: 'password',
                name: 'password',
                required: true,
                style: inputStyle
            }),
            React.createElement('button', {
                type: 'submit',
                style: buttonStyle,
            }, 'Submit')
        )
    );
}

ReactDOM.render(React.createElement(RegistrationForm), document.getElementById('root'));
