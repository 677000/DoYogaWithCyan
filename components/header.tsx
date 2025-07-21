"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.course"), href: "/course", children: [
      { name: t("course.categories.all"), href: "/course/all" },
      { name: t("course.categories.yoga"), href: "/course/yoga" },
      { name: t("course.categories.pilates"), href: "/course/pilates" },
      { name: t("course.categories.breath"), href: "/course/breathing" },
      { name: t("course.categories.meditation"), href: "/course/meditation" },
      { name: t("course.categories.individual"), href: "/course/individual" },
    ] },
    { name: t("nav.scheduler"), href: "/scheduler", children: [
      { name: t("scheduler.categories.online"), href: "/scheduler/online" },
      { name: t("scheduler.categories.offline"), href: "/scheduler/offline" },
    ] },
    { name: t("nav.booking"), href: "/booking" },
    { name: t("nav.showcase"), href: "/showcase" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Image
          src="/logo.png?height=800&width=550"
          alt="Hero Image"
          width={50}
          height={50}
          className="rounded-lg object-cover"
          priority
        />
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">DoYogaWithSasa</span> :-)
          </Link>
        </div>
        <nav className="hidden md:flex gap-1">
          {navigation.map((item) => 
            item.children && item.children.length > 0 ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link
                    key={item.href}
                    href="#"
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {
                    item.children.map((subItem) => (
                      <div key={subItem.href}>
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            pathname === subItem.href ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-foreground",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      </div>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
          )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-2 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

