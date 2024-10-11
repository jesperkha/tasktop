import { Project } from "../types"

export default function ProjectCard(props: Project) {
  const todos = props.todos.filter(item => item.state == "todo")
  const blocked = props.todos.filter(item => item.state == "blocked")
  const inProgress = props.todos.filter(item => item.state == "inProgress")

  return (
    <>
      <div className="w-full bg-slate-400 p-3 flex flex-col">
        <div className="w-full flex gap-3 justify-between items-baseline">
          <p className="text-xl font-bold">{props.title}</p>
          <p className="text-sm">{props.people?.join(", ")}</p>
          <div className="flex-grow"></div>

          <p>Todo</p>
          <p>{todos.length}</p>
          <div></div>
          <p>Blocked</p>
          <p>{blocked.length}</p>
          <div></div>
          <p>In Progress</p>
          <p>{inProgress.length}</p>
          <div></div>
        </div>

        <div className="w-full">
          <p className="">{props.description}</p>
        </div>
      </div>
    </>
  )
}
