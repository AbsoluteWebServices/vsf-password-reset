import { Module } from 'vuex'
import actions from './actions'
import RootState from '@vue-storefront/core/types/RootState'
import UserState from '@vue-storefront/core/modules/user/types/UserState'

export const module: Module<UserState, RootState> = {
  namespaced: true,
  actions
}
