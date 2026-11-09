export type Project = {
  name: string
  description: string
  href: string
  // Shown in a preview above the card on hover.
  image?: { src: string; width: number; height: number; alt: string }
}

export const projects: Project[] = [
  {
    name: "Desktop Karaoke",
    description:
      "Fully local, unintrusive Spotify lyrics overlay for macOS",
    href: "/desktop-karaoke/",
    image: {
      src: "/images/desktop-karaoke.png",
      width: 1926,
      height: 1104,
      alt: "Desktop Karaoke showing synced lyrics over the macOS desktop",
    },
  },
  {
    name: "LGTM",
    description:
      "A zero config code preview desktop util built for mac OS",
    href: "/lgtm/",
    image: {
      src: "/lgtm/og-image.png",
      width: 2424,
      height: 1624,
      alt: "LGTM app showing an AI review of a pull request",
    },
  },
  {
    name: "vue-nodegui",
    description:
      "An open source library for building desktop apps with Vue",
    href: "https://github.com/nodegui/vue-nodegui",
  },
]
