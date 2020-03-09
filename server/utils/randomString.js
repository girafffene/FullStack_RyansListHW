module.exports = function randomString(length) {
  const values =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%?*"
  let random = ""
  for (let i = 0; i < length; i++) {
    random += values.charAt(Math.floor(Math.random() * values.length))
  }

  return random
}
