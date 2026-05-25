import { Link } from "react-router-dom"

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react"

import { motion } from "framer-motion"

import { useCartStore } from "../../store/cartStore"

function CartPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCartStore()

  // EMPTY STATE
  if (items.length === 0) {
    return (
      <div className="
        min-h-[80vh]
        flex
        items-center
        justify-center
        px-6
      ">
        <div className="text-center">
          <div className="
            w-32
            h-32
            mx-auto
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
          ">
            <ShoppingBag
              size={60}
              className="text-gray-400"
            />
          </div>

          <h1 className="
            text-5xl
            font-bold
            mt-8
          ">
            Your cart is empty
          </h1>

          <p className="
            text-gray-500
            mt-4
          ">
            Start shopping to add items.
          </p>

          <Link
            to="/"
            className="
              inline-block
              mt-8
              bg-black
              text-white
              px-8
              py-4
              rounded-2xl
              hover:scale-105
              transition
            "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-white
      to-slate-100
      py-14
      px-6
    ">
      <div className="
        max-w-7xl
        mx-auto
      ">
        {/* TITLE */}
        <h1 className="
          text-6xl
          font-bold
          mb-14
          text-center
        ">
          Shopping Cart
        </h1>

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-10
        ">
          {/* CART ITEMS */}
          <div className="
            lg:col-span-2
            space-y-8
          ">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  bg-white
                  rounded-3xl
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                <div className="
                  flex
                  flex-col
                  md:flex-row
                ">
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      md:w-64
                      h-64
                      object-cover
                    "
                  />

                  {/* CONTENT */}
                  <div className="
                    flex-1
                    p-8
                    flex
                    flex-col
                    justify-between
                  ">
                    {/* TOP */}
                    <div>
                      <div className="
                        flex
                        items-start
                        justify-between
                      ">
                        <div>
                          <h2 className="
                            text-3xl
                            font-bold
                          ">
                            {item.title}
                          </h2>

                          <p className="
                            text-gray-500
                            mt-2
                          ">
                            {item.category}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                          className="
                            text-red-500
                            hover:scale-110
                            transition
                          "
                        >
                          <Trash2 size={24} />
                        </button>
                      </div>

                      <p className="
                        mt-6
                        text-gray-600
                        leading-relaxed
                      ">
                        {item.description}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div className="
                      mt-8
                      flex
                      items-center
                      justify-between
                    ">
                      {/* QUANTITY */}
                      <div className="
                        flex
                        items-center
                        gap-5
                        bg-gray-100
                        px-5
                        py-3
                        rounded-full
                      ">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                          className="
                            hover:scale-110
                            transition
                          "
                        >
                          <Minus size={18} />
                        </button>

                        <span className="
                          text-xl
                          font-semibold
                        ">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                          className="
                            hover:scale-110
                            transition
                          "
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className="
                        text-4xl
                        font-bold
                      ">
                        ₹
                        {item.price *
                          item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SUMMARY */}
          <div>
            <div className="
              sticky
              top-28
              bg-white/80
              backdrop-blur-lg
              rounded-3xl
              p-8
              shadow-xl
            ">
              <h2 className="
                text-3xl
                font-bold
                mb-8
              ">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Subtotal</span>

                  <span>
                    ₹{totalPrice()}
                  </span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Shipping</span>

                  <span>Free</span>
                </div>

                <div className="
                  flex
                  justify-between
                  text-gray-600
                ">
                  <span>Tax</span>

                  <span>
                    ₹
                    {Math.floor(
                      totalPrice() * 0.18
                    )}
                  </span>
                </div>

                <div className="border-t pt-5">
                  <div className="
                    flex
                    justify-between
                    text-3xl
                    font-bold
                  ">
                    <span>Total</span>

                    <span>
                      ₹
                      {totalPrice() +
                        Math.floor(
                          totalPrice() * 0.18
                        )}
                    </span>
                  </div>
                </div>
              </div>

              {/* CHECKOUT BUTTON */}
              <Link
                to="/checkout"
                className="
                  mt-10
                  w-full
                  bg-black
                  text-white
                  py-5
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-lg
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage