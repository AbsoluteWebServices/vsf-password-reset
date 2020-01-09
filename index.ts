import { module } from './store'

export const KEY = 'user'
export const UserExtend = {
  key: KEY,
  store: { modules: [{ key: KEY, module }] }
}
