"use client";

import { useEffect, useRef } from "react";
import { registerCurtain } from "@/lib/transition";

export function Curtain() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    registerCurtain(ref.current);
    return () => registerCurtain(null);
  }, []);
  return <div ref={ref} className="ink-curtain" aria-hidden="true" />;
}
