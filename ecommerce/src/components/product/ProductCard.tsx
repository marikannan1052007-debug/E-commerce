import {
  Heart,
  ShoppingCart,
} from "lucide-react"

import toast from "react-hot-toast"

import { motion } from "framer-motion"

import type { Product } from "../../types/product"

import { useCartStore } from "../../store/cartStore"

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  )

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
        bg-white
        rounded-[30px]
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-200
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full
            h-72
            object-cover
          "
        />

        {/* WISHLIST BUTTON */}
        <button
          className="
            absolute
            top-5
            right-5
            w-12
            h-12
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            shadow-md
            hover:scale-110
            transition
          "
        >
          <Heart size={22} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="
          flex
          items-center
          justify-between
          gap-4
        ">
          <h2 className="
            text-2xl
            font-bold
            leading-tight
          ">
            {product.title}
          </h2>

          <span className="
            text-2xl
            font-bold
            whitespace-nowrap
          ">
            ₹{product.price}
          </span>
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() => {
            addToCart(product)

            toast.success("Added to cart")
          }}
          className="
            mt-6
            w-full
            border
            border-gray-200
            py-4
            rounded-2xl
            flex
            items-center
            justify-center
            gap-3
            text-lg
            font-semibold
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
        >
          <ShoppingCart size={22} />

          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard