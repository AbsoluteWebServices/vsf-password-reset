import { StorefrontModule } from '@vue-storefront/core/lib/modules'
import { module } from './store'

export const KEY = 'user-extend'

export const PasswordResetModule: StorefrontModule = function ({ store, appConfig }) {
  store.registerModule(KEY, module)
}
