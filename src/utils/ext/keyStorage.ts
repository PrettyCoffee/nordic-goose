import browser, { Storage } from "webextension-polyfill"

const { local } = browser.storage

export const keyStorage = <T extends unknown>(key: string) => ({
  get: () => local.get(key).then(store => store[key]),

  set: (value: T) => local.set({ [key]: value }),

  onChange: (cb: (value: T | undefined) => void) => {
    const onChange = (state: Storage.StorageAreaOnChangedChangesType) =>
      cb((state?.[key] as any)?.newValue as T | undefined)

    local.onChanged.addListener(onChange)
    return () => local.onChanged.removeListener(onChange)
  },
})
