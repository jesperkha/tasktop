import TasktopBoard from "./components/TasktopBoard"
import { Project } from "./types"

const myProject: Project = {
  title: "My Project",
  description: "Some small project im working on",
  people: ["John", "Gilbert", "Mary"],
  todos: [
    {
      title: "my todo",
      state: "todo",
      priority: "high",
      size: "small",
    },
    {
      title: "my blocked todo",
      state: "blocked",
      priority: "medium",
      size: "medium",
    },
    {
      title: "another blocked todo with long text to show wrapping",
      state: "blocked",
      priority: "low",
      size: "large",
    },
    {
      title: "something in progress",
      state: "inProgress",
      priority: "medium",
      size: "medium",
      people: ["Bob", "Anthony"],
      numTasks: 3,
      completedTasks: 1,
    },
  ],
  infos: [{ content: "sadjas djsajd ka sjfj dshfk jdsh fj llldh fksdhf kdjfh dkjfh " }],
  subProjects: [],
}

myProject.subProjects.push(myProject)

export default function Home() {
  return (
    <>
      <TasktopBoard project={myProject} />
    </>
  )
}
