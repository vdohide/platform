import type { ReactNode } from "react";

import "./marketing.css";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <div className="marketing-scope">{children}</div>;
}
