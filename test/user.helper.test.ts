import { expect } from "chai";
import { encryptPwd } from "../src/helpers/user.helper";

const key: string = "secret-key";

describe("Encrypt Password Testing", () => {
  it("Password 1", () => {
    const expectVal: string = "superman";
    const actualVal: string = encryptPwd(expectVal, key);
    expect(actualVal).to.eq("U2FsdGVkX19N2Faq9PGyjxBMzK295/qVFT68puhUZSU=");
  });
});
