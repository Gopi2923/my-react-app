import React, {useState} from 'react'

const OnChangeEvents = () => {

  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(0)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState()

  const handleNameChange = (event) => {
     setName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
 
  const handlePaymentChange = (event) => {
    setPayment(event.target.value)
  }

  const handleShippingChange = (event) => {
    setShipping(event.target.value)
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Qty: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter dilivery instructions'></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select a option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
        
      </select>

      <p>Payment: {payment}</p>

      <label htmlFor="">
        <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"} 
                onChange={handleShippingChange}/>
        Pick up
        </label>
      <label htmlFor="">
      <input type="radio" value="Delivery"
             checked={shipping === "Delivery"}  
             onChange={handleShippingChange}/>
        Delivery
        </label>
      <p>Shipping: {shipping}</p>
    </div>
  )
}

export default OnChangeEvents
