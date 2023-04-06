import React from 'react';
import Home from './pages/Home';
import Page from './pages/Page';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" exact element={<Home/>} />
         
          <Route path="/home" element={<Page/>}/>

        </Routes>
      </div>
    </Router>
  );
}
//  {/* <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} /> */}
export default App;
