// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="item-container">
      <img className="image" src={imgUrl} alt={name} />
      <h1 className="head">{name}</h1>
    </li>
  )
}
export default DestinationItem
