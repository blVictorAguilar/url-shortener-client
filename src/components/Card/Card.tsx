import { CardProps } from "./types";
export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow ${className}`}>{children}</div>
  );
}
