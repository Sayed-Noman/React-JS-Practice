import Basket from "../components/Basket"
import Button from "./Button"

import LeftArrow from '../asstes/images/left-arrow.png'
import RightArrow from '../asstes/images/right-arrow.png'
import '../style.css'

import { useState } from "react"



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

    return (
        <section>
            <Basket count={firstBasketCount} basketName={"Basket 1"} />
            <Button
                imageUrl={LeftArrow}
                imageAlt={"Left Arrow"}
                clickHandler={leftArrowClickHandler}
            />
            <Button
                imageUrl={RightArrow}
                imageAlt={"right Arrow"}
                clickHandler={rightArrowClickHandler}
            />
            <Basket count={secondBasketCount} basketName={"Basket 2"} />
        </section>
    )
}

export default Counter