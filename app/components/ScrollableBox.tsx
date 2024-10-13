import Button from "./Button"

type ScrollableBoxProps = {
  title: string
  hasButton?: boolean
  hasSort?: boolean
  count?: number | null
  size: "wide" | "square" | "tall"
  children?: React.ReactNode
}

function BoxHeader({
  title,
  hasButton = false,
  hasSort = false,
  count = null,
}: ScrollableBoxProps) {
  return (
    <>
      <div className="flex gap-2 items-center w-full">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-2xl font-bold text-gray-400">{count !== null ? count : ""}</p>
        <div className="flex-grow"></div>
        {hasSort ? <p className="rounded-full text-sm p-1 pl-4 pr-4 border">Sort ⇄</p> : ""}
        {hasButton ? <Button label="New" /> : ""}
      </div>
    </>
  )
}

export default function ScrollableBox(props: ScrollableBoxProps) {
  const gridSize = {
    wide: "col-span-2",
    tall: "row-span-2",
    square: "",
  }[props.size]

  return (
    <>
      <div
        className={`bg-white border shadow rounded p-4 flex flex-wrap gap-2 ${gridSize} overflow-hidden`}
      >
        <BoxHeader {...props} />
        <div className="h-full w-full overflow-hidden overflow-y-scroll flex flex-col gap-2 pb-8">
          {props.children}
        </div>
      </div>
    </>
  )
}
