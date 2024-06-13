export default function TextInput({
  labelText,
  inputText,
  type,
  onUpdate,
}: {
  labelText: string;
  inputText: string;
  type: "text" | "email" | "password";
  onUpdate: (text: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start justify-start text-start">
      <div className="font-quicksand w-full px-4 pb-2 text-[11px] text-neutral-700">
        {labelText}
      </div>
      <input
        onChange={(e) => onUpdate(e.target.value)}
        type={type}
        placeholder={inputText}
        className="font-quicksand flex h-full w-full items-center rounded-[10px] bg-white px-2 py-2 pl-4 text-[13px] font-semibold text-neutral-700 shadow outline-none"
      ></input>
    </div>
  );
}
