import { KEY } from '../index'

export const CreatePassword = {
  name: 'CreatePassword',
  data () {
    return {
      email: '',
      password: '',
      rPassword: '',
      resetToken: ''
    }
  },
  methods: {
    async createPassword () {
      try {
        await this.$store.dispatch(`${KEY}/createPassword`, { email: this.email, resetToken: this.resetToken, newPassword: this.password })
        this.notifyUser({
          type: 'success',
          message: this.$t('New Password has been set'),
          action1: { label: this.$t('OK') }
        })
      } catch (err) {
        this.notifyUser({
          type: 'error',
          message: this.$t(err.message) || this.$t('Error while creating new password'),
          action1: { label: this.$t('OK') }
        })
      }
    }
  }
}
