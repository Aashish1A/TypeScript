import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'

import type { Chai } from './types.ts'
import ChaiList from './components/ChaiList.tsx'
import OrderForm from './components/OrderForm.tsx'
import Card from './components/Card.tsx'

const menu: Chai[] = [
  { id: 1, name: "Cardamom Chai", price: 99 },
  { id: 2, name: "Black Chai", price: 89 },
  { id: 3, name: "Lemon Chai", price: 79 }
]

function App() {

  return (
    <>
      <div>
        <h1>React with TypeScript</h1>
        <ChaiCard name="Masala Chai" price={99} isSpecial />
        <ChaiCard name="Ginger Chai" price={89} />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList chaiList={menu} />
      </div>

      <div>
        <OrderForm onSubmit={(order) => console.log("Placed order: ", order.name, order.cups, order.price)} />
      </div>

      <div>
        <Card title="Special Chai" footer={<button>Order Now</button>}></Card>
      </div>

      
    </>
  )
}

export default App
