import type { ReactNode } from "react";

import { CRTDisplay } from "./CRTDisplay";

interface CRTScreenProps {
  children: ReactNode;
}

export function CRTScreen({ children }: CRTScreenProps) {
  return (
    <div className="crt-screen">
      <CRTDisplay>{children}</CRTDisplay>
    </div>
  );
}
