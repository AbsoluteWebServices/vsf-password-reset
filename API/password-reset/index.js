import { apiStatus } from '../../../lib/util'
import { multiStoreConfig } from '../../../platform/magento2/util'
import { Router } from 'express'
const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config, db }) => {
  let userApi = Router()

  /**
   * POST for creating new user's password
   */
  userApi.post('/create-password', (req, res) => {
    const { storeCode } = req.query
    const websiteId = storeCode ? config.storeViews[storeCode].websiteId : undefined
    const client = Magento2Client(multiStoreConfig(config.magento2.api, req))
    client.customers.resetPasswordUsingResetToken({ ...req.body, websiteId }).then((result) => {
      apiStatus(res, result, 200)
    }).catch(err => {
      apiStatus(res, err, 500)
    })
  });

  return userApi
}
