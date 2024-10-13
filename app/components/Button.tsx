type ButtonProps = {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <>
      <div className="flex justify-center items-center text-sm rounded-full bg-green-200 p-1 pl-5 pr-5 font-bold">
        <p>{label}</p>
      </div>
    </>
  )
}
