export function ColorBox({
  label,
  bg,
  text,
}: {
  label: string
  bg: string
  text: string
}) {
  return (
    <div className={`${bg} ${text} rounded-lg border p-4 shadow-sm`}>
      <p className="text-sm font-bold">{label}</p>
    </div>
  )
}
