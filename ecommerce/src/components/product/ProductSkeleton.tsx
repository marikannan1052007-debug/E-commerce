function ProductSkeleton() {
  return (
    <div
      className="
        bg-white
        dark:bg-gray-900
        rounded-3xl
        overflow-hidden
        shadow-sm
        p-4
        animate-pulse
      "
    >
      {/* Image Skeleton */}
      <div
        className="
          h-72
          w-full
          rounded-2xl
          bg-gray-200
          dark:bg-gray-800
        "
      />

      {/* Content */}
      <div className="mt-6">
        {/* Title */}
        <div
          className="
            h-6
            w-3/4
            rounded-lg
            bg-gray-200
            dark:bg-gray-800
          "
        />

        {/* Category */}
        <div
          className="
            h-4
            w-1/3
            rounded-lg
            bg-gray-200
            dark:bg-gray-800
            mt-4
          "
        />

        {/* Description */}
        <div className="space-y-3 mt-6">
          <div
            className="
              h-4
              w-full
              rounded-lg
              bg-gray-200
              dark:bg-gray-800
            "
          />

          <div
            className="
              h-4
              w-5/6
              rounded-lg
              bg-gray-200
              dark:bg-gray-800
            "
          />

          <div
            className="
              h-4
              w-2/3
              rounded-lg
              bg-gray-200
              dark:bg-gray-800
            "
          />
        </div>

        {/* Footer */}
        <div className="
          flex
          items-center
          justify-between
          mt-8
        ">
          {/* Price */}
          <div
            className="
              h-8
              w-20
              rounded-lg
              bg-gray-200
              dark:bg-gray-800
            "
          />

          {/* Button */}
          <div
            className="
              h-12
              w-32
              rounded-2xl
              bg-gray-200
              dark:bg-gray-800
            "
          />
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton