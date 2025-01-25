import { InputProps } from "./types";

export function Input({ value, onChange, placeholder, className }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
}
