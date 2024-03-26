import {Route,Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './pages/SideBar';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetail';
import Products from './pages/Products';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  const {pathname} = useLocation(); 

  useEffect(() => {
    window.scrollTo(0,0);

  },[pathname])

  useEffect(() => {
    AOS.init();
  }, [])
  return (

    
    <div className='overflow-x-hidden bg-white'>
                    <ToastContainer />
            <Navbar/>
            <SideBar/>
            <Routes>
                <Route path='/jmcommerce-react' element={<Home />} />
                <Route path='/jmcommerce-react/product/:id' element={<ProductsDetail/>} />
                <Route path='/jmcommerce-react/products' element={<Products />} />
            </Routes>
            <Footer/>
    </div>
  )
}

export default App