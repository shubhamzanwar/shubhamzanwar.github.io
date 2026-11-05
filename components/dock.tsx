"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState, type MouseEvent } from "react"
import {
  FolderOpenIcon,
  Home01Icon,
  Mail01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const items: { label: string; href: string; icon: IconSvgElement }[] = [
  { label: "Home", href: "/", icon: Home01Icon },
  { label: "About", href: "/about", icon: UserIcon },
  { label: "Projects", href: "/projects", icon: FolderOpenIcon },
  { label: "Contact", href: "/contact", icon: Mail01Icon },
]

// Tile size at rest, tile size directly under the cursor, and how far (px)
// from a tile's center the cursor still affects it.
const BASE_SIZE = 48
const MAX_SIZE = 80
const RANGE = 140

function magnify(distance: number) {
  if (distance >= RANGE) return BASE_SIZE
  // Cosine falloff: full size at the center, easing smoothly back to base.
  const t = Math.cos((distance / RANGE) * (Math.PI / 2))
  return BASE_SIZE + (MAX_SIZE - BASE_SIZE) * t
}

function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/"
  return href === "/" ? path === "/" : path.startsWith(href)
}

export function Dock() {
  const pathname = usePathname()
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [sizes, setSizes] = useState(() => items.map(() => BASE_SIZE))

  function handleMouseMove(e: MouseEvent) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setSizes(
      itemRefs.current.map((el) => {
        if (!el) return BASE_SIZE
        const rect = el.getBoundingClientRect()
        return magnify(Math.abs(e.clientX - (rect.left + rect.width / 2)))
      })
    )
  }

  function handleMouseLeave() {
    setSizes(items.map(() => BASE_SIZE))
  }

  return (
    <nav
      aria-label="Main"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center"
    >
      <TooltipProvider>
        <ul
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="pointer-events-auto flex h-16 items-end gap-3 rounded-2xl bg-background/70 px-3 pb-2 shadow-lg ring-1 ring-foreground/10 backdrop-blur-md"
        >
          {items.map((item, i) => {
            const active = isActive(pathname, item.href)
            return (
              <li
                key={item.href}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                style={{ width: sizes[i], height: sizes[i] }}
                className="relative shrink-0 transition-[width,height] duration-150 ease-out"
              >
                <Tooltip>
                  <TooltipTrigger
                    delay={0}
                    render={
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          buttonVariants({ variant: "outline", size: "icon" }),
                          // Outline buttons are translucent in dark mode
                          // (bg-input/30); tiles must be opaque so the dock's
                          // edge doesn't show through when they grow past it.
                          "size-full rounded-[22%] bg-card shadow-sm hover:bg-muted dark:bg-card dark:hover:bg-muted"
                        )}
                      />
                    }
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className="size-1/2"
                      strokeWidth={1.75}
                    />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8}>{item.label}</TooltipContent>
                </Tooltip>
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-foreground",
                    !active && "hidden"
                  )}
                />
              </li>
            )
          })}
        </ul>
      </TooltipProvider>
    </nav>
  )
}
