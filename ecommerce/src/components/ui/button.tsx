import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}

function Button({
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
        hover:opacity-80
        transition
      "
    >
      {children}
    </button>
  )
}

export default Button