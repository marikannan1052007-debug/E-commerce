import {
  ShoppingCart,
} from "lucide-react"

import { Link } from "react-router-dom"

import { useCartStore } from "../../store/cartStore"

function Navbar() {
  const totalItems = useCartStore(
    (state) => state.totalItems()
  )

  return (
    <nav className="
      sticky
      top-0
      z-50
      bg-white/80
      backdrop-blur-lg
      border-b
      border-gray-100
    ">
      <div className="
       w-full px-8 lg:px-12
        px-6
        py-5
        flex
        items-center
        justify-between
      ">
        {/* LOGO */}
        <Link
          to="/"
          className="
            text-5xl
            font-black
          "
        >
          Shop
          <span className="text-indigo-600">
            Elite
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="
          flex
          items-center
          gap-10
          text-xl
          font-semibold
        ">
          <Link to="/">
            Home
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingCart size={36} />

            {totalItems > 0 && (
              <span className="
                absolute
                -top-2
                -right-2
                bg-black
                text-white
                text-sm
                w-7
                h-7
                rounded-full
                flex
                items-center
                justify-center
              ">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar