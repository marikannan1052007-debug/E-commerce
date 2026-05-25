import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../schemas/checkoutSchema"

import { useCartStore } from "../../store/cartStore"

function CheckoutForm() {
  const navigate = useNavigate()

  const clearCart = useCartStore(
    (state) => state.clearCart
  )

  const [loading, setLoading] =
    useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(
      checkoutSchema
    ),
  })

  // SUBMIT FUNCTION
  const onSubmit = async (
    data: CheckoutFormData
  ) => {
    console.log(data)

    setLoading(true)

    // Simulate API request
    setTimeout(() => {
      clearCart()

      setLoading(false)

      navigate("/success")
    }, 2000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        bg-white
        rounded-[40px]
        shadow-xl
        p-8
        space-y-6
      "
    >
      {/* NAME */}
      <div>
        <label className="
          block
          mb-2
          font-semibold
        ">
          Full Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="
            w-full
            border
            border-gray-200
            p-4
            rounded-2xl
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        {errors.name && (
          <p className="
            text-red-500
            text-sm
            mt-2
          ">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="
          block
          mb-2
          font-semibold
        ">
          Email Address
        </label>

        <input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className="
            w-full
            border
            border-gray-200
            p-4
            rounded-2xl
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        {errors.email && (
          <p className="
            text-red-500
            text-sm
            mt-2
          ">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* ADDRESS */}
      <div>
        <label className="
          block
          mb-2
          font-semibold
        ">
          Shipping Address
        </label>

        <textarea
          placeholder="Enter your address"
          rows={4}
          {...register("address")}
          className="
            w-full
            border
            border-gray-200
            p-4
            rounded-2xl
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        {errors.address && (
          <p className="
            text-red-500
            text-sm
            mt-2
          ">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="
          block
          mb-2
          font-semibold
        ">
          Phone Number
        </label>

        <input
          type="text"
          placeholder="9876543210"
          {...register("phone")}
          className="
            w-full
            border
            border-gray-200
            p-4
            rounded-2xl
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        {errors.phone && (
          <p className="
            text-red-500
            text-sm
            mt-2
          ">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-black
          text-white
          py-4
          rounded-2xl
          text-lg
          font-semibold
          hover:scale-[1.02]
          transition
          disabled:opacity-50
        "
      >
        {loading
          ? "Processing Order..."
          : "Place Order"}
      </button>
    </form>
  )
}

export default CheckoutForm