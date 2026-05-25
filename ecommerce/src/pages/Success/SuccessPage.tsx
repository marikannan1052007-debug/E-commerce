import { Link } from "react-router-dom"

import { CheckCircle2 } from "lucide-react"

import { motion } from "framer-motion"

import Confetti from "react-confetti"

function SuccessPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-green-50
        via-white
        to-green-100
        py-20
        px-6
        relative
        overflow-hidden
      "
    >
      {/* CONFETTI */}
      <Confetti />

      {/* CENTER CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-center
        "
      >
        {/* CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            bg-white
            rounded-[40px]
            shadow-2xl
            p-12
            max-w-xl
            w-full
            text-center
            relative
            z-10
          "
        >
          {/* SUCCESS ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className="
              w-32
              h-32
              bg-green-100
              rounded-full
              flex
              items-center
              justify-center
              mx-auto
            "
          >
            <CheckCircle2
              size={70}
              className="text-green-600"
            />
          </motion.div>

          {/* TITLE */}
          <h1
            className="
              text-5xl
              font-bold
              mt-10
            "
          >
            Order Placed!
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-500
              mt-6
              text-lg
              leading-relaxed
            "
          >
            Thank you for your purchase.
            Your order has been successfully
            placed and will be delivered soon.
          </p>

          {/* ORDER DETAILS */}
          <div
            className="
              mt-10
              bg-gray-50
              rounded-3xl
              p-6
              text-left
            "
          >
            <div
              className="
                flex
                justify-between
                mb-4
              "
            >
              <span className="text-gray-500">
                Order ID
              </span>

              <span className="font-semibold">
                #SE12458
              </span>
            </div>

            <div
              className="
                flex
                justify-between
                mb-4
              "
            >
              <span className="text-gray-500">
                Payment
              </span>

              <span
                className="
                  font-semibold
                  text-green-600
                "
              >
                Successful
              </span>
            </div>

            <div
              className="
                flex
                justify-between
              "
            >
              <span className="text-gray-500">
                Delivery
              </span>

              <span className="font-semibold">
                2-4 Business Days
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            to="/"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              bg-black
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-semibold
              hover:scale-105
              transition
              shadow-xl
            "
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default SuccessPage