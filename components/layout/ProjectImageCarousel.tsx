"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

type ProjectImageCarouselProps = {
  images: string[];
  title: string;
};

export default function ProjectImageCarousel({
  images,
  title,
}: ProjectImageCarouselProps) {
  const safeImages = useMemo(
    () => (images && images.length > 0 ? images : ["/images/placeholder.jpg"]),
    [images],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentImage = safeImages[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isExpanded) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <>
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm">
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="relative block w-full border-border overflow-hidden"
        >
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[420px]">
            <Image
              src={currentImage}
              alt={`${title} - imagen ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              className="object-cover cursor-zoom-in"
              priority
            />
          </div>
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-md hover:scale-105 cursor-pointer"
            >
              <IoChevronBack className="h-5 w-5" />
            </button>

            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-md hover:scale-105 cursor-pointer"
            >
              <IoChevronForward className="h-5 w-5" />
            </button>

            <div className="absolute right-4 top-4 rounded-full bg-card/90 text-foreground px-3 py-1 text-xs font-semibold shadow-md">
              {currentIndex + 1}/{safeImages.length}
            </div>
          </>
        )}
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-muted shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl w-full flex items-center justify-center">
              <Image
                src={currentImage}
                alt={`${title} - imagen ${currentIndex + 1}`}
                width={1600}
                height={900}
                className="w-full max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
                priority
              />

              <div className="absolute right-4 top-4 flex items-center gap-2">
                {/* Contador */}
                {safeImages.length > 1 && (
                  <div className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold shadow-md">
                    {currentIndex + 1}/{safeImages.length}
                  </div>
                )}

                <button
                  onClick={() => setIsExpanded(false)}
                  className="rounded-full bg-red-700 text-white p-3 shadow-md hover:scale-105 cursor-pointer"
                >
                  <IoClose className="h-6 w-6" />
                </button>
              </div>

              {safeImages.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-md hover:scale-105 cursor-pointer"
                  >
                    <IoChevronBack className="h-5 w-5" />
                  </button>

                  <button
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-md hover:scale-105 cursor-pointer"
                  >
                    <IoChevronForward className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
