import { Navigate } from "react-router-dom"

import CheckoutForm from "../../components/forms/CheckoutForm"

import { useCartStore } from "../../store/cartStore"

function CheckoutPage() {
  const items = useCartStore(
    (state) => state.items
  )

  if (items.length === 0  &&
  window.location.pathname !== "/success") {
    return <Navigate to="/" />
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <CheckoutForm />
    </div>
  )
}

export default CheckoutPage