import { TodoItem } from "../types"

export default function TodoCard({ title, priority, size }: TodoItem) {
  const borderColor = {
    high: "border-rose-500",
    medium: "border-yellow-400",
    low: "border-transparent",
  }[priority]

  return (
    <>
      <div
        className={`w-full flex pt-3 pb-3 items-center gap-3 bg-slate-50 shadow rounded ${borderColor} border-l-8 font-light`}
      >
        <div></div>
        <p className="flex-grow ">{title}</p>
        <p className="text-gray-400">{size.charAt(0).toUpperCase() + size.slice(1)}</p>
        <div></div>
      </div>
    </>
  )
}
