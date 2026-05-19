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
      <p className="font-semibold text-sm">{label}</p>
    </div>
  )
}
