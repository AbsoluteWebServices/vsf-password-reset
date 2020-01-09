import { ActionTree } from 'vuex'
import rootStore from '@vue-storefront/core/store'
import { adjustMultistoreApiUrl } from '@vue-storefront/core/lib/multistore'
import RootState from '@vue-storefront/core/types/RootState'
import UserState from '@vue-storefront/core/modules/user/types/UserState'
import { processURLAddress } from '@vue-storefront/core/helpers'
import config from 'config'

const actions: ActionTree<UserState, RootState> = {
  /**
   * Create new user password
   */
  createPassword (context, { email, resetToken, newPassword }): Promise<Response> {
    let url = config.users.createPassword_endpoint
    if (config.storeViews.multistore) {
      url = adjustMultistoreApiUrl(url)
    }

    return new Promise((resolve, reject) => {
      fetch(processURLAddress(url), { method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          resetToken,
          newPassword
        })
      }).then(resp => {
        resp.json().then(json => {
          if (resp.ok) {
            rootStore.dispatch('user/login', {
              username: email,
              password: newPassword
            })

            resolve(json)
          } else {
            reject(json)
          }
        })
      })
    })
  }
}

export default actions
