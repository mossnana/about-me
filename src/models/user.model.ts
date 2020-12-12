
export class User {
  name: string
  email: string
  private _password: string = ""
  
  constructor(
    name: string,
    email: string,
  ) {
    this.name = name
    this.email = email
  }

  public set password(password: string) {
    this._password = password
  }

  public get password(): string {
    return this._password
  }

}