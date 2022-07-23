import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import './styles/App.css'
import { useStateValue } from './components/StoreProvider'


const App = () => {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          {/* header */}
          < Header />
          <div className='app__body'>

            <Sidebar />

            {/* feed */}
            <Feed />
            <Widgets />

          </div>
        </>
      )}


    </div>
  )
}

export default App
