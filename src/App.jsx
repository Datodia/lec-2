import './App.css'
import Header from './components/Header'
import UserCard from './components/UserCard'

function App() {

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

      <div className='container'>

        <UserCard
          userName={'Donald trump'}
          userImg={'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTu-GSY_bXjggu92Go8I0Od4bEoIE-RnSuaCRmN5xcL4lfSDQI169Wyg5hK0VegSLUJjpqlG47veDZ33C0'}
        />
        <UserCard 
          userName={'Lionel messi'} 
          userImg={'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ6pO5yKKYJwWYLNid0npWlujwRgzOPrBvFDQtcVX99jbb_suMQ6MuFLxCG-cqFH3DZYI4wX9y9gQJwvsg'}  
        />
        <UserCard 
          userName={'Barak obama'} 
          userImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vzpFnQice-TrYb3JuD6GvltmBtbKpqfVUXPcYXBNyFhsgR_kseT28VUdTAjcgoaA-XPR4AAoXDIZ82Pl7TSN7iq-u2E1QexyhaZ4Uw&s=10'}
        />
        <UserCard 
          userName={'George Vashington'} 
          userImg={'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcShrmKtWcGuoOetn56nCEQZKdEh6o2aC2G1GCcyjAtY0QUXHr0J4uJroqS887TxJT6lRJS6Vn7oKOX9OQ4'}
        />

      </div>
    </div>
  )
}

export default App
