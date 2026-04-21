"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ExperienceDetails() {
  const [open, setOpen] = useState(false);

  const t = useTranslations("about.experienceDetails");

  const items = t.raw("items") as string[];
  return (
    <div className="mt-7">
      <h5 className="text-sm font-semibold text-foreground mb-2">
        {t("title1")}
      </h5>

      <div className="flex items-start gap-3">
        <span className="text-primary-600 mt-1">✔</span>

        <p className="text-sm leading-7 text-muted-foreground text-start lg:text-justify">
          {t("summary")}
        </p>
      </div>

      {/* Solo cuando está cerrado */}
      {!open && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary-800 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-900 hover:shadow-lg cursor-pointer"
          >
            {t("viewMore")}
            <span className="transition hover:-translate-y-0.5">↓</span>
          </button>
        </div>
      )}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">✔</span>
              <p className="text-sm leading-7 text-muted-foreground text-start lg:text-justify">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Cuando está abierto) */}
        {open && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setOpen(false)}
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary-800 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-900 hover:shadow-lg cursor-pointer"
            >
              {t("viewLess")}
              <span className="transition hover:-translate-y-0.5">↑</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
