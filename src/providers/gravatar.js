'use strict'

const { stringify } = require('querystring')
const crypto = require('crypto')

const { AVATAR_SIZE } = require('../constant')

const md5 = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

module.exports = async (username, fallback) =>
  `https://gravatar.com/avatar/${md5(username)}?${stringify({
    size: AVATAR_SIZE,
    d: fallback
  })}`

module.exports.supported = {
  email: true,
  username: false,
  domain: false
}
