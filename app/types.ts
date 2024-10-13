export type TodoItem = {
  title: string
  state: "todo" | "blocked" | "inProgress"
  priority: "high" | "medium" | "low"
  size: "large" | "medium" | "small"
  tasks?: Array<string>
  numTasks?: number
  completedTasks?: number
  people?: Array<string>
}

export type InfoItem = {
  content: string
}

export type Project = {
  title: string
  description: string
  people?: Array<string>
  todos: Array<TodoItem>
  infos: Array<InfoItem>
  subProjects: Array<Project>
}
