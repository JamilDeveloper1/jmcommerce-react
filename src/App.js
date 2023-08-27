

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetail';
import Navbar from './components/Navbar';
import SideBar from './pages/SideBar';
import Footer from './components/Footer';
import Products from './pages/Products';



function App() {

  return (


    <div className='overflow-x-hidden'>
        <Router>
            <Navbar/>
            <SideBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductsDetail/>} />
                <Route path='/products' element={<Products />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App