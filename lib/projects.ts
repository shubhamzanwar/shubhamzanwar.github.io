export type Project = {
  name: string
  description: string
  href: string
}

export const projects: Project[] = [
  {
    name: "Desktop Karaoke",
    description:
      "A macOS lyrics overlay that syncs with Spotify and scrolls lyrics in real time.",
    href: "/desktop-karaoke/",
  },
  {
    name: "LGTM",
    description:
      "A Mac app that watches your PRs and reviews them automatically with Claude Code.",
    href: "/lgtm/",
  },
  {
    name: "vue-nodegui",
    description:
      "Build native, cross-platform desktop apps with Vue and CSS-like styling.",
    href: "https://github.com/nodegui/vue-nodegui",
  },
]
