import { expect } from "chai";
import { User } from "../../src/models/user.model";

describe("User model setting", () => {
  const user: User = new User("Permpoon chao", "samurai.hanso@gmail.com")
  it("Setting password", () => {
    user.password = "superman"
    expect(user.password).to.eq("c4c6cb2418c580a49ca970e209f6fef4ff8245a11f6859ccbf4ae7ba6c47c55b")
  });
});
