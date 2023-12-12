import React, {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type InputUiProps = {
  placeholder?: string;
  label?: string;
  type?: "text" | "email" | "password" | "number" | "textarea"; // Added "textarea" type
  rest?: () => void;
  className?: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
); // Use a separate type for textarea

function InputUi({
  label,
  type,
  placeholder,
  className,
  ...rest
}: InputUiProps) {
  return (
    <label className={`flex-col flex ${className}`}>
      {label}
      {type === "textarea" ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="border-2 h-[10rem] p-2 border-black resize-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          className="border-2 h-10 p-2 border-black "
          type={type}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

export default InputUi;
