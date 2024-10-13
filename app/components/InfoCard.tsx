export default function InfoCard({ content }: { content: string }) {
  const limit = 20
  const numWords = content.split(" ").length

  let cols = ""
  if (numWords > limit) cols += "col-span-2"
  if (numWords > limit * 2) cols += " row-span-2"

  return (
    <>
      <div className={`p-3 ${cols} rounded bg-slate-50 shadow font-light`}>
        <p>{content}</p>
      </div>
    </>
  )
}
