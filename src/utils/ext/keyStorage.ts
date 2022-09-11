import browser, { Storage } from "webextension-polyfill"

const { local } = browser.storage

const setStorageByKey = <T>(key: string, value: T) =>
  local.get().then(store =>
    local.set({
      ...store,
      [key]: value,
    })
  )

export const keyStorage = <T>(key: string) => ({
  get: () => local.get(key).then(store => store[key]),

  set: (value: T) => setStorageByKey(key, value),

  onChange: (cb: (value: T | undefined) => void) => {
    const onChange = (state: Storage.StorageAreaOnChangedChangesType) =>
      cb((state?.[key] as any)?.newValue as T | undefined)

    local.onChanged.addListener(onChange)
    return () => local.onChanged.removeListener(onChange)
  },
})
