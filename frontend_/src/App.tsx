import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Helmet>
    <script src="./src/assets/js/vendor/jquery.js"></script>
    <script src="./src/assets/js/vendor/jquery.nice-select.min.js"></script>
    <script src="./src/assets/js/vendor/jquery-ui.js"></script>
    <script src="./src/assets/js/vendor/modernizer.min.js"></script>
    <script src="./src/assets/js/vendor/feather.min.js"></script>
    <script src="./src/assets/js/vendor/slick.min.js"></script>
    <script src="./src/assets/js/vendor/bootstrap.min.js"></script>
    <script src="./src/assets/js/vendor/sal.min.js"></script>
    <script src="./src/assets/js/vendor/particles.js"></script>
    <script src="./src/assets/js/vendor/jquery.style.swicher.js"></script>
    <script src="./src/assets/js/vendor/js.cookie.js"></script>
    <script src="./src/assets/js/vendor/count-down.js"></script>
    <script src="./src/assets/js/vendor/isotop.js"></script>
    <script src="./src/assets/js/vendor/imageloaded.js"></script>
    <script src="./src/assets/js/vendor/backtoTop.js"></script>
    <script src="./src/assets/js/vendor/odometer.js"></script>
    <script src="./src/assets/js/vendor/jquery-appear.js"></script>
    <script src="./src/assets/js/vendor/scrolltrigger.js"></script>
    <script src="./src/assets/js/vendor/jquery.custom-file-input.js"></script>
    <script src="./src/assets/js/vendor/savePopup.js"></script>
    <script src="./src/assets/js/vendor/vanilla.tilt.js"></script>
    <script src="./src/assets/js/main.js"></script>
    <script src="./src/assets/js/vendor/web3.min.js"></script>
    <script src="./src/assets/js/vendor/maralis.js"></script>
    <script src="./src/assets/js/vendor/nft.js"></script>
  </Helmet>
    <div className="App">
       <Routes>
        <Route path='/' />

       </Routes>
    </div>
    </>
  )
}

export default App