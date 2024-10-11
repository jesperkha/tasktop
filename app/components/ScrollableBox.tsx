type ScrollableBoxProps = {
  title: string
  hasButton?: boolean
  hasSort?: boolean
  count?: number | null
  size: "wide" | "square" | "tall"
}

function BoxHeader({
  title,
  hasButton = false,
  hasSort = false,
  count = null,
}: ScrollableBoxProps) {
  return (
    <>
      <div className="mt-2 mb-2 bg-red-50 flex gap-3 items-center w-full">
        <p>{title}</p>
        <p>{count !== null ? count : ""}</p>
        <div className="flex-grow"></div>
        {hasSort ? <p>Sort</p> : ""}
        {hasButton ? <p>Add+</p> : ""}
      </div>
    </>
  )
}

export default function ScrollableBox(props: ScrollableBoxProps, children: React.ReactNode) {
  const gridSize = {
    wide: "col-span-2",
    tall: "row-span-2",
    square: "",
  }[props.size]

  return (
    <>
      <div className={gridSize + " bg-slate-300 overflow-hidden overflow-y-scroll p-4"}>
        <BoxHeader {...props} />
        {children}
      </div>
    </>
  )
}
