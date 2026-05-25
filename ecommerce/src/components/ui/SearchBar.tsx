type Props = {
  search: string
  setSearch: (value: string) => void
}

function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          bg-white
          border
          border-gray-200
          p-4
          rounded-2xl
          focus:outline-none
          focus:ring-2
          focus:ring-black
        "
      />
    </div>
  )
}

export default SearchBar