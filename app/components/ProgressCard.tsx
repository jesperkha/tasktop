import { TodoItem } from "../types"

function ProgressBar({
  numTasks = 1,
  completedTasks = 1,
}: {
  numTasks?: number
  completedTasks?: number
}) {
  const progress = completedTasks / numTasks

  return (
    <>
      <div style={{ width: "50%" }} className="h-full flex items-center gap-2 justify-end">
        <div className="h-2 flex bg-gray-200 rounded-full overflow-hidden" style={{ width: "70%" }}>
          <div
            className="h-full bg-gradient-to-r from-red-400 to-orange-400"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
        <p>
          {completedTasks} / {numTasks}
        </p>
      </div>
    </>
  )
}

export default function ProgressCard({
  title,
  size,
  numTasks = 0,
  completedTasks = 0,
  people = [],
}: TodoItem) {
  return (
    <>
      <div className={`w-full flex flex-col p-3 items-center gap-1 bg-slate-50 rounded shadow`}>
        <div className="w-full">
          <p className="">{title}</p>
        </div>
        <div className="w-full text-xs text-gray-400 flex items-center justify-between gap-2">
          <p className="text-ellipsis text-nowrap overflow-hidden" style={{ width: "50%" }}>
            {size.charAt(0).toUpperCase() + size.slice(1)} | {people.join(", ")}
          </p>
          {numTasks > 0 ? <ProgressBar numTasks={numTasks} completedTasks={completedTasks} /> : ""}
        </div>
      </div>
    </>
  )
}
