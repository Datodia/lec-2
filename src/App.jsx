import './App.css'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import UserCard from './components/UserCard'
import { products, users } from './data'

function App() {

  const handleVersion2 = () => {
    console.log('Clicked Version 2')
    // backedinda wamoigos informacia
    // gamoachinos loader buttonshi
    // daarenders mtelniti
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleMouseEnter = () => {
    alert('Mouse entered')
  }

  const handleMouseLeave = () => {
    console.log('MOuse Left')
  }

  const handleMouseMove = () => {
    console.log('mouse moving')
  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <Header />
      <h1
        style={{
          color: 'red',
          fontFamily: 'monospace',
          fontSize: '30px'
        }}
      >Random Text</h1>

      <button onClick={() => {
        console.log('clicked version 1')
      }} >Version 1</button>

      <button onClick={handleVersion2}>Version 2</button>

      <input
        onChange={handleChange}
        type="text"
        placeholder='enter your name'
      />

      {/* {nums.map(n => (
         <div className='blueBox'>{n}</div>
      ))} */}

      <div className='container'>
        {users.map((user, index) => (
          <UserCard
            key={user.id} // index may use
            userName={user.fullName}
            userImg={user.userImage}
          />
        ))}
      </div>

      <h1>Products</h1>
      <div className='container'>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            productImg={product.img}
            productName={product.title}
            productPrice={product.price}
            productReviews={product.review}
          />
        ))}
      </div>
    </div>
  )
}

export default App
