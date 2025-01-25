import { CardContentProps } from "./types";

export function CardContent({ children }: CardContentProps) {
  return <div className="p-4">{children}</div>;
}
