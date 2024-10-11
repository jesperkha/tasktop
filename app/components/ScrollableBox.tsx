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
      <div className="mt-2 mb-2 flex gap-3 items-center w-full">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl font-bold text-gray-400">{count !== null ? count : ""}</p>
        <div className="flex-grow"></div>
        {hasSort ? <p>Sort</p> : ""}
        {hasButton ? <p>Add+</p> : ""}
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
      <div className={`bg-slate-300 p-4 ${gridSize} overflow-hidden`}>
        <BoxHeader {...props} />
        <div className="h-full overflow-hidden overflow-y-scroll flex flex-col gap-2 pb-8">
          {props.children}
        </div>
      </div>
    </>
  )
}
