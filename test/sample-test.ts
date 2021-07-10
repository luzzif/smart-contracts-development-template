import { use, expect } from "chai";
import { waffle } from "hardhat";

const { solidity } = waffle;
use(solidity);

describe("Sample test", () => {
    it("should succeed", async () => {
        expect(1).to.be.equal(1);
    });
});
