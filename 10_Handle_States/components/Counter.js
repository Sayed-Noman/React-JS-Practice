import { createRoot } from 'react-dom/client'
import Button from './Button.js'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import Basket from './Basket.js'
import '../style.css'
import { useState } from 'react'


const root = createRoot(document.getElementById('root'));

const Counter = () => {
    const totalApple = 10;

    const [firstBasketCount, setFirstBasketCount] = useState(totalApple);
    const [secondBasketCount, setSecondBasketCount] = useState(totalApple - firstBasketCount);

    const leftArrowClickHandler = () => {
        if (firstBasketCount < totalApple) {
            setFirstBasketCount(firstBasketCount + 1)
            setSecondBasketCount(secondBasketCount - 1)
        }
    };

    const rightArrowClickHandler = () => {
        if (secondBasketCount < totalApple) {
            setSecondBasketCount(secondBasketCount + 1)
            setFirstBasketCount(firstBasketCount - 1)
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
                <Basket count={firstBasketCount} basketName="Basket 1" />
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
                <Basket count={secondBasketCount} basketName="Basket 2" />
            </section>
        </>
    );
};

export default Counter;
