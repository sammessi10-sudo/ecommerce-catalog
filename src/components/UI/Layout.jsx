import Products from '../products/Products.jsx';
import Footer from './Footer.jsx';
import './Nav.jsx';
import Nav from './Nav.jsx';

const Layout = () => {
  return (
    <main className="text-white h-full px-10 flex flex-col justify-between">
      <Nav/>
      <Products/>
      <Footer/>
    </main>
  )
}

export default Layout
