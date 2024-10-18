import {React} from 'react'
import ReactDOM from 'react-dom/client'

const RegistrationForm = () => {
    const imgStyle = {
        display: 'block',
        margin: '0 auto 20px',
        width: '100px', // Set desired width
        height: '90px'  // Keep aspect ratio
    }

    const h1Style = {
        textAlign: 'center',
        color: 'rgb(51, 51, 51)'
    }

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
    }

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    }

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    }

    const registerImage = new URL('./register-image.png', import.meta.url)

    return (<section className="registration-form" >
        <img src={registerImage} alt="Register" style={imgStyle}></img>
        <h1 style={h1Style}>Register</h1>
        <form style={formStyle}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" style={inputStyle} required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" style={inputStyle} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" style={inputStyle} required />
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    </section>)
}

console.log(RegistrationForm)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RegistrationForm ></RegistrationForm>)

