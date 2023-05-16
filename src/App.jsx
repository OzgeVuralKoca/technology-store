import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Cart/Cart"
import Header from "./Layout/Header"
import Products from "./Products/Products"
import CartProvider from "./Context/CartProvider"
import Detail from "./ProductDetails/Detail"

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      <BrowserRouter>
        {cartIsShow && <Cart onCloseCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Routes>
          <Route path="https://technology-store-frontend.netlify.app/" element={<Products />} />
          <Route path="https://technology-store-frontend.netlify.app/detail/:id" element={<Detail />} />
        </Routes>
        <footer className="text-center text-white py-3 mt-5 border-top">
        <h6>Created By <a style={{textDecoration: "none"}} className="text-info" target="_blank" href="https://ozgevuralkoca.github.io/portfolio" rel="noreferrer">ozgevuralkoca</a> | © 2023 All rights reserved</h6>
      </footer>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
