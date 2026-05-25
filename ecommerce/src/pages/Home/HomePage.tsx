import { useState } from "react"

import {
  Monitor,
  Shirt,
  Watch,
  ShoppingBag,
} from "lucide-react"

import ProductCard from "../../components/product/ProductCard"

import { mockProducts } from "../../data/mockProducts"

function HomePage() {
  const [selectedCategory, setSelectedCategory] =
    useState("Electronics")

  const categories = [
    {
      name: "Electronics",
      icon: <Monitor size={20} />,
    },

    {
      name: "Fashion",
      icon: <Shirt size={20} />,
    },

    {
      name: "Accessories",
      icon: <ShoppingBag size={20} />,
    },

    {
      name: "Smart Devices",
      icon: <Watch size={20} />,
    },
  ]

  const filteredProducts =
    mockProducts.filter(
      (product) =>
        product.category === selectedCategory
    )

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-purple-50
      to-slate-100
      px-6
      py-10
    ">
      <div className="
       
  w-full
  px-8
  lg:px-12
  py-16

      ">
        {/* CATEGORY PILLS */}
        <div className="
          flex
          flex-wrap
          gap-6
          justify-center
          mb-16
        ">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  category.name
                )
              }
              className={`
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-200
                shadow-md

                ${
                  selectedCategory ===
                  category.name
                    ? "bg-black text-white"
                    : "bg-white text-black hover:scale-105"
                }
              `}
            >
              {category.icon}

              {category.name}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        ">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage