import { Project } from "../types"

function Label({ label, value }: { label: string; value: number }) {
  return (
    <>
      <div className="flex justify-between gap-2 font-medium">
        <p>{label}</p>
        <p className="text-gray-400">{value}</p>
      </div>
    </>
  )
}

export default function ProjectCard(props: Project) {
  const todos = props.todos.filter(item => item.state == "todo")
  const blocked = props.todos.filter(item => item.state == "blocked")
  const inProgress = props.todos.filter(item => item.state == "inProgress")

  return (
    <>
      <div className="w-full bg-slate-50 shadow rounded p-3 flex flex-col">
        <div className="w-full flex gap-3 justify-between items-baseline">
          <p className="text-xl font-bold">{props.title}</p>
          <p className="text-sm text-gray-400">{props.people?.join(", ")}</p>
          <div className="flex-grow"></div>

          <Label label="Todo" value={todos.length} />
          <Label label="Blocked" value={blocked.length} />
          <Label label="In Progress" value={inProgress.length} />
        </div>

        <div className="w-full">
          <p className="font-light">{props.description}</p>
        </div>
      </div>
    </>
  )
}
