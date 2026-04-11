"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function BackToProjectsButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "projects";

  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return true;
    }

    return false;
  };

  const handleBack = () => {
    router.push(`/projects?tab=${tab}`, { scroll: false });

    let attempts = 0;

    const interval = setInterval(() => {
      const found = scrollToProjects();

      if (found || attempts > 20) {
        clearInterval(interval);
      }

      attempts++;
    }, 50);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-md cursor-pointer"
    >
      ← Back
    </button>
  );
}
