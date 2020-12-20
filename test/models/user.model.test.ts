import { expect } from "chai";
import { User } from "../../src/models/user.model";

describe("User model setting", () => {
  const user: User = new User("Permpoon chao", "samurai.hanso@gmail.com")
  it("Setting password", () => {
    user.password = "superman"
    expect(user.password).to.eq("c4c6cb2418c580a49ca970e209f6fef4ff8245a11f6859ccbf4ae7ba6c47c55b")
  });

  it('Setting parse json to user object', () => {
    const myJson = JSON.parse(`
      "name": "permpoon",
      "email": "samurai.hanso@gmail.com",
      "password": "superman",
    `)
    const user = User.fromJson(JSON.parse(myJson))
    expect(user.name).to.eq("permpoon")
    expect(user.email).to.eq("samurai.hanso@gmail.com")
    expect(user.password).to.eq("samurai.hanso@gmail.com")
  })
});
