"use client";

import { useEffect } from "react";

type VideoModalProps = {
  videoId: string;
  onClose: () => void;
};

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Talim product tour"
      className="fixed inset-0 z-[500] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-[26px] bg-black shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
        <button type="button" autoFocus onClick={onClose} aria-label="Close video" className="absolute right-3 top-3 z-10 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-2xl leading-none text-ink">
          ×
        </button>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Talim product tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    </div>
  );
}
