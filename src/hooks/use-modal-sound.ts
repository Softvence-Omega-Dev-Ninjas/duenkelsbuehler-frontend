import { useEffect } from "react";

export function useModalSound(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;
    const audio = new Audio("/sounds/modal_open_sound.mp3");
    audio.volume = 0.8;
    audio.play().catch(() => {});
  }, [isOpen]);
}
