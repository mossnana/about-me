import { expect } from "chai";
import { hashPwd } from "../../src/helpers/user.helper";

describe("Hash Password Testing", () => {
  it("Hash password", () => {
    const actualVal: string = hashPwd("superman");
    expect(actualVal).to.eq("c4c6cb2418c580a49ca970e209f6fef4ff8245a11f6859ccbf4ae7ba6c47c55b");
  });
});
