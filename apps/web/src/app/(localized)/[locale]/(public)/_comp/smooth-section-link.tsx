"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

const PENDING_SECTION_KEY = "vdohide:pending-section";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (!section) return false;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  return true;
}

export function SmoothSectionLink({
  children,
  className,
  sectionId,
}: {
  children: ReactNode;
  className?: string;
  sectionId: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const pendingSection = sessionStorage.getItem(PENDING_SECTION_KEY);
    if (!pendingSection) return;

    sessionStorage.removeItem(PENDING_SECTION_KEY);
    requestAnimationFrame(() => scrollToSection(pendingSection));
  }, [pathname]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      scrollToSection(sectionId);
      return;
    }

    sessionStorage.setItem(PENDING_SECTION_KEY, sectionId);
  }

  return (
    <Link className={className} href="/" onClick={handleClick}>
      {children}
    </Link>
  );
}
