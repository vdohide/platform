import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

import "@workspace/ui/globals.css"
import {
  defaultLocale,
  localeTags,
  normalizeLocale,
} from "@workspace/i18n/config"
import { cn } from "@workspace/ui/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"
import { selectClientMessages } from "@/i18n/client-messages"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vdohide.com"),
  robots: { index: false, follow: false },
}

export default async function DashboardRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = normalizeLocale(await getLocale()) ?? defaultLocale
  const messages = await getMessages()

  return (
    <html
      lang={localeTags[locale]}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geistMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={selectClientMessages(messages)}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
