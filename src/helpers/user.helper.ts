import AES from 'crypto-js/aes'

export const encryptPwd = (password: string, key: string): string => {
  return AES.encrypt(password, key).toString()
}

export const decryptPwd = (decryptPwd: string, key: string): string => {
  return AES.decrypt(decryptPwd, key).toString()
}
