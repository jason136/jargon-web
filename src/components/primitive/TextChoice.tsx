import star from '../../assets/icons/star.svg'

export default function TextChoice({
  color,
  disabled,
  onChange,
}: {
  color: 'green' | 'red' | 'grey'
  disabled: boolean
  onChange: (input: string) => void
}) {
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
          <img className="jg-mr-4 jg-w-[18px] jg-h-[18px]" src={star} />
        )}
      </div>
    </div>
  )
}
