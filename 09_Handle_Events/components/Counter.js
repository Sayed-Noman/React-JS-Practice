import { createRoot } from 'react-dom/client'
import Button from './Button.js'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import Basket from './Basket.js'
import '../style.css'


const totalApple = 10;
let firstBasketApples = totalApple;
let secondBasketApples = 0;

const root = createRoot(document.getElementById('root'));

const Counter = () => {
    const leftArrowClickHandler = () => {
        if (firstBasketApples < totalApple) {
            firstBasketApples++;
            secondBasketApples--;
           // render();
        }
    };

    const rightArrowClickHandler = () => {
        if (secondBasketApples < totalApple) {
            firstBasketApples--;
            secondBasketApples++;
            //render();
        }
    };

    const render = () => {
        root.render(
            <Counter />
        );
    };

    return (
        <>
            <section>
                <Basket count={firstBasketApples} basketName="Basket 1" />
                <Button
                    clickHandler={leftArrowClickHandler}
                    imageUrl={LeftArrow}
                    imageAlt={'Left Arrow'}
                />
                <Button
                    clickHandler={rightArrowClickHandler}
                    imageUrl={RightArrow}
                    imageAlt={'Right Arrow'}
                />
                <Basket count={secondBasketApples} basketName="Basket 2" />
            </section>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={render}>Re Render</button>
            </p>
        </>
    );
};

export default Counter;
