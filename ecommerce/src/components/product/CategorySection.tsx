import ProductCard from "./ProductCard"

import type { Product } from "../../types/product"

type Props = {
  title: string
  products: Product[]
}

function CategorySection({
  title,
  products,
}: Props) {
  return (
    <section className="mb-20">
      {/* HEADER */}
      <div className="
        flex
        items-center
        justify-between
        mb-8
      ">
        <h2 className="
          text-4xl
          font-bold
        ">
          {title}
        </h2>

        <button className="
          text-gray-500
          hover:text-black
          transition
        ">
          View All →
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="
        grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        gap-10
      ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default CategorySection