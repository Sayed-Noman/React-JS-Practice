const RegistrationForm = () => {
  const imgStyle = {
    display: 'block',
    margin: '0 auto 20px',
    width: '100px',
    // Set desired width
    height: '90px' // Keep aspect ratio
  };
  const h1Style = {
    textAlign: 'center',
    color: 'rgb(51, 51, 51)'
  };
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
    borderRadius: '3px'
  };
  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "registration-form"
  }, /*#__PURE__*/React.createElement("img", {
    src: "register-image.png",
    alt: "Register",
    style: imgStyle
  }), /*#__PURE__*/React.createElement("h1", {
    style: h1Style
  }, "Register"), /*#__PURE__*/React.createElement("form", {
    style: formStyle
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "username",
    name: "username",
    style: inputStyle,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    style: inputStyle,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    style: inputStyle,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: buttonStyle
  }, "Submit")));
};
console.log(RegistrationForm);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(RegistrationForm, null));
//# sourceMappingURL=script.js.map