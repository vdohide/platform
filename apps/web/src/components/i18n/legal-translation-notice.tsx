"use client"

import { useLocale } from "next-intl"

export function LegalTranslationNotice() {
  const locale = useLocale()

  if (locale !== "th") return null

  return (
    <div className="border-b border-amber-300/60 bg-amber-50 px-5 py-3 text-center text-xs leading-5 text-amber-950 sm:px-8 dark:border-amber-900/60 dark:bg-amber-950/35 dark:text-amber-100">
      คำแปลภาษาไทยจัดทำขึ้นเพื่อความสะดวกเท่านั้น หากข้อความขัดแย้งกัน
      ให้ยึดเอกสารฉบับภาษาอังกฤษเป็นหลัก
    </div>
  )
}
