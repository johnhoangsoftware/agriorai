import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexAgriblock from './component/IndexAgriblock'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route index element={<IndexAgriblock/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
