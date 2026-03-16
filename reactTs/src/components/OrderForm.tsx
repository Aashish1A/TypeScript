import { useState } from "react"

interface OrderFormProps {
    onSubmit(order: {name: string; cups: number; price: number}): void
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala")
  const [cups, setCups] = useState<number>(1)
  const [price, setPrice] = useState<number>(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ name, cups, price })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="cups">Cups:</label>
        <input type="number" id="cups" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(parseInt(e.target.value) || 0)} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(e.target.value) || 0)} />
      </div>
      <button type="submit">Place Order</button>
    </form>
  )
}

export default OrderForm