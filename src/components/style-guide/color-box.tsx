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
    <div className={`${bg} ${text} p-4 rounded-lg border shadow-sm`}>
      <p className="font-bold text-sm">{label}</p>
    </div>
  )
}
