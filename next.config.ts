import type { NextConfig } from "next"
import { PHASE_DEVELOPMENT_SERVER } from "next/constants"

// Static landing pages bundled in public/<name>/index.html.
const landingPages = ["lgtm", "desktop-karaoke"]

export default function config(phase: string): NextConfig {
  // `next dev` only serves public/ files at their exact path, so map
  // /lgtm/ to /lgtm/index.html. The trailing slash matters: the landing pages
  // use relative asset paths, which break at /lgtm. Rewrites aren't supported
  // with static export; GitHub Pages resolves directory index.html (and
  // redirects /lgtm -> /lgtm/) on its own.
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: { unoptimized: true },
      trailingSlash: true,
      async rewrites() {
        return landingPages.map((name) => ({
          source: `/${name}/`,
          destination: `/${name}/index.html`,
        }))
      },
    }
  }

  return {
    output: "export",
    // GitHub Pages can only serve a branch from its root or /docs, so the
    // export goes to docs/ (committed) instead of the default out/.
    distDir: "docs",
    images: { unoptimized: true },
    // Emit about/index.html rather than about.html, so both /about and
    // /about/ resolve on GitHub Pages (the old site's URLs end in "/").
    trailingSlash: true,
  }
}
