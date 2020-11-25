const count = require("../../src/commands/count");
const countDataMock = require("./mocks/count.data.json");

describe("count", () => {
  it("Count animals for each owner, and people for each country ", () => {
    expect(count()).toEqual(countDataMock);
  });
});
