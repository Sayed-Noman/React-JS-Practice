const Basket = ({count, basketName}) =>{
    return (
        <div className="basket">
            <h1>
                <span>{count}</span> Apples
            </h1>
            <p>{basketName}</p>
        </div>
    )
}

export default Basket