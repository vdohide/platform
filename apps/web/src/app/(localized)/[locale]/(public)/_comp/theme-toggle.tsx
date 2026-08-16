"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@workspace/ui/components"

import { useContentTranslation } from "@/components/i18n/localized-text"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const t = useContentTranslation()

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="outline"
      className="rounded-lg border-[var(--m-line)] bg-[var(--m-surface)] text-[var(--m-muted)] hover:bg-[var(--m-surface-subtle)] hover:text-[var(--m-text)]"
      aria-label={t("Toggle color theme")}
      title={t("Toggle color theme")}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-3.5 dark:hidden" />
      <Moon className="hidden size-3.5 dark:block" />
    </Button>
  )
}
