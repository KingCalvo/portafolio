"use client";

import { useEffect } from "react";

export default function DisableBfcache() {
  useEffect(() => {
    const noop = () => {};
    window.addEventListener("unload", noop);
    return () => window.removeEventListener("unload", noop);
  }, []);

  return null;
}
