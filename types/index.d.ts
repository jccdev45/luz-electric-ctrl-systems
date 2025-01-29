export type SiteConfig = {
  name: string
  description: string
  keywords: string[]
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type NavItem = {
  title: string
  href: string
}