export class Session {
  subject: string
  name: string
  iat: number
  admin: boolean
  exp: number

  constructor(
    subject: string,
    name: string,
    iat: number,
    admin: boolean,
    exp: number,
  ) {
    this.subject = subject
    this.name = name
    this.iat = iat
    this.admin = admin
    this.exp = exp
  }

  static fromJson(): Session | undefined {
    return undefined
  }
}