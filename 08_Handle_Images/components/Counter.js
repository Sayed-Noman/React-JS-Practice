import Button from './Button.js'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import Basket from './Basket.js'
import '../style.css'

// Counter Component
const Counter = () => {
    return (
        <section>
            <Basket count={10} basketName="Basket 1"/>
            <Button
                imageUrl={LeftArrow}
                imageAlt={'Left Arrow'}
            />

            <Button
                imageUrl={RightArrow}
                imageAlt={'Right Arrow'}
            />
            <Basket count={0} basketName="Basket 2"/>
        </section>
    )
}
export default Counter