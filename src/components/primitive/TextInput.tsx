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
    <div className="w-full flex flex-col items-start justify-start text-start">
      <div className="px-4 pb-2 w-full text-neutral-700 text-[11px] font-quicksand">
        {labelText}
      </div>
      <input
        onChange={(e) => onUpdate(e.target.value)}
        type={type}
        placeholder={inputText}
        className="pl-4 py-2 px-2 w-full h-full flex items-center bg-white shadow rounded-[10px] outline-none text-neutral-700 text-[13px] font-semibold font-quicksand"
      ></input>
    </div>
  );
}
