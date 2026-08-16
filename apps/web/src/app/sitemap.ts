import type { MetadataRoute } from "next"

import { locales } from "@workspace/i18n/config"

import { getPathname } from "@/i18n/navigation"

const siteUrl = "https://vdohide.com"

const routes = [
  { pathname: "/", changeFrequency: "weekly", priority: 1 },
  { pathname: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/video-hosting", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/features", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/developers", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/security", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  {
    pathname: "/solutions/adult-video-hosting",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { pathname: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/report-abuse", changeFrequency: "monthly", priority: 0.5 },
  { pathname: "/legal", changeFrequency: "monthly", priority: 0.5 },
  { pathname: "/legal/terms", changeFrequency: "monthly", priority: 0.4 },
  { pathname: "/legal/privacy", changeFrequency: "monthly", priority: 0.4 },
  {
    pathname: "/legal/content-policy",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  { pathname: "/legal/dmca", changeFrequency: "monthly", priority: 0.4 },
] as const

function absolute(pathname: string) {
  return new URL(pathname, siteUrl).toString()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.flatMap((route) => {
    const englishPath = getPathname({ locale: "en", href: route.pathname })
    const thaiPath = getPathname({ locale: "th", href: route.pathname })
    const languages = {
      en: absolute(englishPath),
      th: absolute(thaiPath),
      "x-default": absolute(englishPath),
    }

    return locales.map((locale) => ({
      url: absolute(getPathname({ locale, href: route.pathname })),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }))
  })
}
