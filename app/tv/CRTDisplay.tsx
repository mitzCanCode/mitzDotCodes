import type { ReactNode } from "react";

import { Stars } from "./Stars";
import { CRTScanlines } from "./CRTScanlines";
import { CRTNoise } from "./CRTNoise";
import { CRTFlicker } from "./CRTFlicker";
import { WindowContainer } from "./WindowContainer";


interface CRTDisplayProps {
  children: ReactNode;
}

export function CRTDisplay({ children }: CRTDisplayProps) {
  return (
    <div className="crt-display">

      <Stars />

      {/* Actual application content */}
      <div className="crt-content">
        {children}
      </div>

      <WindowContainer />

      <CRTScanlines />
      <CRTNoise />
      <CRTFlicker />

    </div>
  );
}