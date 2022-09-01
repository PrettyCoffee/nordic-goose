import { version, displayName, description } from "../package.json"

export const getManifest = () => ({
  "{{chrome}}.manifest_version": 3,
  "{{firefox}}.manifest_version": 2,
  name: displayName,
  version,
  description,
  icons: {
    "16": "assets/icon16.png",
    "32": "assets/icon32.png",
    "48": "assets/icon48.png",
    "128": "assets/icon128.png",
  },
  chrome_url_overrides: {
    newtab: "index.html",
  },
  permissions: ["tabs"],
})
