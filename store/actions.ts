import { ActionTree } from 'vuex'
import rootStore from '@vue-storefront/core/store'
import RootState from '@vue-storefront/core/types/RootState'
import UserState from '@vue-storefront/core/modules/user/types/UserState'
import { TaskQueue } from '@vue-storefront/core/lib/sync'
import Task from '@vue-storefront/core/lib/sync/types/Task'
import { processLocalizedURLAddress } from '@vue-storefront/core/helpers'
import config from 'config'

const actions: ActionTree<UserState, RootState> = {
  /**
   * Create new user password
   */
  async createPassword (context, { email, resetToken, newPassword }): Promise<Task> {
    const resp = await TaskQueue.execute({
      url: processLocalizedURLAddress(config.users.createPassword_endpoint),
      payload: {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          resetToken,
          newPassword
        })
      }
    })

    if (resp.code === 200) {
      rootStore.dispatch('user/login', {
        username: email,
        password: newPassword
      })
    } else {
      throw new Error(resp.result.errorMessage)
    }

    return resp
  }
}

export default actions
