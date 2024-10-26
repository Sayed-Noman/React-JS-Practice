const Button = ({imageUrl, imageAlt, clickHandler}) => {

    return (
        <button
            type="button"
            onClick={clickHandler}
        >
            <img src={imageUrl} alt={imageAlt}></img>
        </button>
    )
}

export default Button