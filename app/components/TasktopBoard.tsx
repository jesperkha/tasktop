import ScrollableBox from "./ScrollableBox"
import TodoCard from "./TodoCard"

function InfoBoard() {
  return (
    <>
      <ScrollableBox title="Info board" size="wide" hasButton={true}></ScrollableBox>
    </>
  )
}

function Todo({ title }: { title: string }) {
  return (
    <>
      <ScrollableBox title={title} size="square" hasButton={true} hasSort={true} count={0}>
        <TodoCard title="hello" priority="high" size="large" />
        <TodoCard title="hello" priority="medium" size="medium" />
        <TodoCard title="hello" priority="low" size="small" />
      </ScrollableBox>
    </>
  )
}

function InProgress() {
  return (
    <>
      <ScrollableBox title="In Progress" size="tall" count={0}></ScrollableBox>
    </>
  )
}

function Projects() {
  return (
    <>
      <ScrollableBox title="Projects" size="wide" hasButton={true}></ScrollableBox>
    </>
  )
}

export default function TasktopBoard() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 w-screen h-screen p-2">
        <InfoBoard />
        <Todo title="Todo" />
        <InProgress />
        <Projects />
        <Todo title="Blocked" />
      </div>
    </>
  )
}
