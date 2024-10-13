import { Project } from "../types"
import InfoCard from "./InfoCard"
import ProgressCard from "./ProgressCard"
import ProjectCard from "./ProjectCard"
import ScrollableBox from "./ScrollableBox"
import TodoCard from "./TodoCard"

function InfoBoard({ project }: { project: Project }) {
  return (
    <>
      <ScrollableBox title="Info board" size="wide" hasButton={true}>
        <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-2">
          {project.infos.map((item, index) => (
            <InfoCard content={item.content} key={index} />
          ))}
        </div>
      </ScrollableBox>
    </>
  )
}

function Blocked({ project }: { project: Project }) {
  const blocked = project.todos.filter(item => item.state == "blocked")

  return (
    <>
      <ScrollableBox
        title="Blocked"
        size="square"
        hasButton={true}
        hasSort={true}
        count={blocked.length}
      >
        {blocked.map((item, index) => (
          <TodoCard {...item} key={index} />
        ))}
      </ScrollableBox>
    </>
  )
}

function Todo({ project }: { project: Project }) {
  const todos = project.todos.filter(item => item.state == "todo")

  return (
    <>
      <ScrollableBox
        title="Todo"
        size="square"
        hasButton={true}
        hasSort={true}
        count={todos.length}
      >
        {todos.map((item, index) => (
          <TodoCard {...item} key={index} />
        ))}
      </ScrollableBox>
    </>
  )
}

function InProgress({ project }: { project: Project }) {
  const inProgress = project.todos.filter(item => item.state == "inProgress")

  return (
    <>
      <ScrollableBox title="In Progress" size="tall" hasSort={true} count={inProgress.length}>
        {inProgress.map((item, index) => (
          <ProgressCard {...item} key={index} />
        ))}
      </ScrollableBox>
    </>
  )
}

function Projects({ project }: { project: Project }) {
  return (
    <>
      <ScrollableBox title="Projects" size="wide" hasButton={true}>
        {project.subProjects.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </ScrollableBox>
    </>
  )
}

export default function TasktopBoard({ project }: { project: Project }) {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 w-screen h-screen p-2">
        <InfoBoard project={project} />
        <Todo project={project} />
        <InProgress project={project} />
        <Projects project={project} />
        <Blocked project={project} />
      </div>
    </>
  )
}
