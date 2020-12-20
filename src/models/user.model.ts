import * as helpers from "../helpers/user.helper";

export class User {
  name: string;
  email: string;
  private _password: string = "";

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public set password(password: string) {
    this._password = helpers.hashPwd(password);
  }

  public get password(): string {
    return this._password;
  }

  static fromJson(json: any): User {
    const user = new User(json?.name, json?.email);
    user.password = json.password ?? "";
    return user;
  }
}

export class Password {
  private _hash: string = ""
  private _raw: string = ""

  constructor() {
    
  }

  static fromHash(hash: string) {
    
  }

  static fromRaw(raw: string) {

  }
}