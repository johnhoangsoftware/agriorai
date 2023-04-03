import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexAgriblock from './component/IndexAgriblock'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path="/home" >
          <Route index element={<IndexAgriblock />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
