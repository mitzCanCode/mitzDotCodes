import type { ReactNode } from "react";

import { CRTScreen } from "./CRTScreen";

import "./tv.css";

interface OldTVFrameProps {
  children: ReactNode;
}

export function OldTVFrame({ children }: OldTVFrameProps) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <div className="relative h-screen w-screen">
        <CRTScreen>{children}</CRTScreen>

        {/* TV frame sits above everything */}
        <img
          src="/tvFrame.png"
          alt=""
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            h-full
            w-full
            object-fill
          "
        />
      </div>
    </div>
  );
}
