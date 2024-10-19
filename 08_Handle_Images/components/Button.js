// Button Component
const Button = ({ imageUrl, imageAlt }) => {
  return (
    <button type="button">
      <img src={imageUrl} alt={imageAlt}></img>
    </button>
  )
}

export default Button
