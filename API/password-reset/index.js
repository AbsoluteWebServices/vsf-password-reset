import { apiStatus } from '../../../lib/util'
import { Router } from 'express'
const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config, db }) => {
  let userApi = Router()

  /**
   * POST for creating new user's password
   */
  userApi.post('/create-password', (req, res) => {
    const client = Magento2Client(config.magento2.api)
    client.customers.resetPasswordUsingResetToken(req.body).then((result) => {
      apiStatus(res, result, 200)
    }).catch(err => {
      apiStatus(res, err, 500)
    })
  });

  return userApi
}
