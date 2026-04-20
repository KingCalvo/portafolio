"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

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
    router.push(
      {
        pathname: "/projects",
        query: { tab },
      },
      { scroll: false },
    );

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
      className="flex w-full sm:w-auto items-center justify-center sm:justify-start rounded-full border border-primary-500/50 bg-primary-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-primary-900 hover:text-white hover:shadow-md cursor-pointer"
    >
      ← Back
    </button>
  );
}
