import React, { Fragment } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Modal from './components/Modal';
import Content from './components/Content';
import { useState } from 'react';
const App = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleClick = (message) => {
        alert(message);
    };

    return (
        <Fragment>
            <div>
                <Card title="User Profile">
                    <p>Name: Jane Doe</p>
                    <p>Age: 28</p>
                    <p>Location: New York</p>
                </Card>

                <Card title="Product Details">
                    <p>Product Name: Widget</p>
                    <p>Price: $19.99</p>
                    <p>Description: A useful widget for everyone!</p>
                </Card>

                <Card title="Blog Post">
                    <h3>Understanding React Props</h3>
                    <p>React props are essential for passing data...</p>
                </Card>
            </div>

            <div>
                <h1>Custom Button Example</h1>
                <Button onClick={() => handleClick('Button 1 clicked!')}>
                    Click Me
                </Button>
                <Button onClick={() => handleClick('Button 2 clicked!')}>
                    <span role="img" aria-label="rocket">🚀</span> Launch
                </Button>
                <Button onClick={() => handleClick('Button 3 clicked!')}>
                    <strong>Submit</strong> Form
                </Button>
            </div>

            <div>
                <h1>Modal Example</h1>
                <button onClick={toggleModal}>Open Modal</button>
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                    <Content /> {/* Passing the ModalContent component as children */}
                </Modal>
            </div>
        </Fragment>
    );
};

export default App;
