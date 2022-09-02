const lookup: Record<string, string> = {
  "/": "/",
  deepl: "https://deepl.com/",
  reddit: "https://reddit.com/",
  maps: "https://maps.google.com/",
  ados: "https://ados.ptvag.ptv.de/ptv/ptv-technology/_git/curie-components",
  sprint: "https://ados.ptvag.ptv.de/ptv/ptv-technology/_sprints/directory",
  github: "https://github.com",
  localhost: "https://localhost:3000",
  nas: "https://prettycoffee.de3.quickconnect.to/",
  emoji: "https://getemoji.com/",
}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = (value: string) => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = (value: string) => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

export const search = (value: string) => {
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}
