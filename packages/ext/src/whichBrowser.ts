import browser from "webextension-polyfill"

// runtime.getBrowserInfo only exists in Firefox right now
const chromiumInfo = new Promise(resolve =>
  resolve({ name: "Chromium", vendor: "webkit" })
)
const browserInfo = browser?.runtime?.getBrowserInfo?.() || chromiumInfo

export const whichBrowser = browserInfo.then(info =>
  info.name === "Firefox" ? "firefox" : "chromium"
)
