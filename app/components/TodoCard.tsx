type TodoCardProps = {
  title: string
  priority: "high" | "medium" | "low"
  size: "large" | "medium" | "small"
}

export default function TodoCard({ title, priority, size }: TodoCardProps) {
  const barColor = {
    high: "border-red-500",
    medium: "border-orange-500",
    low: "border-transparent",
  }[priority]

  return (
    <>
      <div
        className={`w-full flex pt-3 pb-3 items-center gap-3 bg-slate-400 rounded ${barColor} border-l-8`}
      >
        <div></div>
        <p className="flex-grow ">{title}</p>
        <p>{size.charAt(0).toUpperCase() + size.slice(1)}</p>
        <div></div>
      </div>
    </>
  )
}
