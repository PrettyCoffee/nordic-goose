export const ensureArray = <T>(value: T | T[]) =>
  Array.isArray(value) ? value : [value]
