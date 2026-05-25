import { Routes, Route } from "react-router-dom"

import Navbar from "./components/ui/Navbar"
import HomePage from "./pages/Home/HomePage"
import CartPage from "./pages/Cart/CartPage"
import CheckoutPage from "./pages/Checkout/CheckoutPage"
import SuccessPage from "./pages/Success/SuccessPage"


function App() {
  return (
    <div className="
      min-h-screen
      w-full
      bg-gradient-to-br
      from-slate-50
      via-white
      to-slate-100
    ">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

        <Route
          path="/success"
          element={<SuccessPage />}
        />
      </Routes>
    </div>
  )
}

export default App