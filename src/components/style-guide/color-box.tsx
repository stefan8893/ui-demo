export function ColorBox({
  label,
  bg,
  text,
  color,
}: {
  label: string
  bg: string
  text: string
  color: string
}) {
  return (
    <div className={`${bg} ${text} p-4 rounded-lg border shadow-sm`}>
      <p className="font-bold text-sm">{label}</p>
      <p className="text-[10px] opacity-80 uppercase tracking-wider font-mono">
        {color}
      </p>
    </div>
  )
}
