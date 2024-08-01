import Image from 'next/image'

interface TextChoiceProps {
  color: 'green' | 'red' | 'grey'
  disabled: boolean
  onChange: (input: string) => void
  icon: string
}

export default function TextChoice({
  color,
  disabled,
  onChange,
  icon,
}: TextChoiceProps) {
  return (
    <div className="jg-flex jg-w-full jg-h-[34px] jg-relative jg-items-center">
      <div
        className={`jg-flex jg-flex-row jg-w-full jg-h-full jg-rounded-[7px] jg-shadow jg-justify-between jg-items-center ${
          color == 'green'
            ? 'bg-emerald-200'
            : color == 'red'
            ? 'bg-rose-300'
            : 'jg-bg-blue-50'
        }`}
      >
        <input
          className="jg-pl-4 jg-w-full jg-h-[34px] jg-text-neutral-700 jg-bg-transparent jg-text-[13px] jg-font-quicksand jg-outline-none"
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />

        {color == 'green' && (
          <Image src={icon} alt="" width={24} height={24} />
        )}
      </div>
    </div>
  )
}