import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './pages/SideBar';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetail';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {

  return (

    
    <div className='overflow-x-hidden'>
        <Router>
            <Navbar/>
            <SideBar/>
            <Routes>
                <Route path='/jmcommerce-react' element={<Home />} />
                <Route path='/jmcommerce-react/product/:id' element={<ProductsDetail/>} />
                <Route path='/jmcommerce-react/products' element={<Products />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App