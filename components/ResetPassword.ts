import Product from '@vue-storefront/core/modules/catalog/types/Product'

export const ResetPassword = {
  name: 'ResetPassword',
  data () {
    return {
      email: '',
      password: '',
      rPassword: ''
    }
  },
  methods: {
    async resetPass () {
      try {
        await this.$store.dispatch('user/createPassword', { email: this.email, resetToken: this.$route.params.resetToken, newPassword: this.password })
        this.notifyUser({
          type: 'success',
          message: this.$t('New Password has been set'),
          action1: { label: this.$t('OK') }
        })
      } catch (err) {
        this.notifyUser({
          type: 'error',
          message: this.$t(err.result) || this.$t('Error while creating new password'),
          action1: { label: this.$t('OK') }
        })
      }
    }
  }
}
