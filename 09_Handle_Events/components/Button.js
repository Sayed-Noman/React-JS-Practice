// Button Component
const Button = ({ imageUrl, imageAlt, clickHandler }) => {
  return (
    <button onClick={clickHandler} type="button">
      <img src={imageUrl} alt={imageAlt}></img>
    </button>
  )
}

export default Button
