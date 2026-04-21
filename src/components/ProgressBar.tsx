interface ProgressBarProps {
  value: number // 0–100
  color?: string
  label?: string
  showLabel?: boolean
}

export default function ProgressBar({
  value,
  color = 'bg-indigo-500',
  label,
  showLabel = true,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  )
}
