import { useState } from "react"

import { motion } from "framer-motion"

import ProductCard from "./ProductCard"

import SearchBar from "../ui/SearchBar"

import { mockProducts } from "../../data/mockProducts"

import {
  staggerContainer,
} from "../../animation/variants"

function ProductGrid() {
  const [search, setSearch] =
    useState("")

  const filteredProducts =
    mockProducts.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        "
      >
        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </motion.div>
    </div>
  )
}

export default ProductGrid