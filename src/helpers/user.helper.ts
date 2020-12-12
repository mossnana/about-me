import CryptoJS from 'crypto-js'

export const hashPwd = (password: string): string => {
  const firstRound: string = CryptoJS.SHA256(password).toString()
  return CryptoJS.SHA256(firstRound).toString()
}
