/**
 * Search function
 */

const searchInput: HTMLInputElement | null = document.querySelector("#searchbar > input")
const searchButton: HTMLButtonElement | null = document.querySelector("#searchbar > button")

const lookup: Record<string, string> = { "/": "/", "deepl": "https://deepl.com/", "reddit": "https://reddit.com/", "maps": "https://maps.google.com/", "ados": "https://ados.ptvag.ptv.de/ptv/ptv-technology/_git/curie-components", "sprint": "https://ados.ptvag.ptv.de/ptv/ptv-technology/_sprints/directory", "github": "https://github.com", "localhost": "https://localhost:3000", "nas": "https://prettycoffee.de3.quickconnect.to/", "emoji": "https://getemoji.com/" }
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

const search = () => {
  const value = searchInput?.value || ""
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput?.addEventListener(
  "keyup",
  event => event.key === "Enter" && search()
)
searchInput?.addEventListener("click", search)

/**
 * inject bookmarks into html
 */

type Bookmark = {
  label: string
  url: string
}
type BookmarkGroup = {
  label: string
  bookmarks: Bookmark[]
}

const bookmarks: BookmarkGroup[] = [
  {
    "label": "reddit",
    "bookmarks": [
      {
        "label": "r/startpages",
        "url": "https://www.reddit.com/r/startpages/"
      },
      {
        "label": "r/unixporn",
        "url": "https://www.reddit.com/r/unixporn/"
      },
      {
        "label": "r/web_design",
        "url": "https://www.reddit.com/r/web_design/"
      }
    ]
  },
  {
    "label": "design tools",
    "bookmarks": [
      {
        "label": "pixlrx",
        "url": "https://pixlr.com/x/"
      },
      {
        "label": "image enlarger",
        "url": "https://bigjpg.com/en"
      },
      {
        "label": "haikei",
        "url": "https://app.haikei.app/"
      },
      {
        "label": "css gradients",
        "url": "https://larsenwork.com/easing-gradients/"
      }
    ]
  },
  {
    "label": "worth reading",
    "bookmarks": [
      {
        "label": "happy hues",
        "url": "https://www.happyhues.co/"
      },
      {
        "label": "styled-components",
        "url": "https://www.joshwcomeau.com/react/demystifying-styled-components/"
      },
      {
        "label": "react docs",
        "url": "https://reactjs.org/docs/getting-started.html"
      }
    ]
  },
  {
    "label": "sources",
    "bookmarks": [
      {
        "label": "icons",
        "url": "https://feathericons.com/"
      },
      {
        "label": "author",
        "url": "https://prettycoffee.github.io/"
      }
    ]
  }
]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = (title: string) => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }: Bookmark) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = (bookmarks: Bookmark[]) => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }: BookmarkGroup) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer: HTMLElement | null = document.getElementById("bookmarks")
  bookmarksContainer?.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer?.append(group))
}

injectBookmarks()
