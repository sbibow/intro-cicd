const request = require("supertest")
const app = require("./app")

describe("Home route", () => {
  it("Returns sum on integers" , async () => {
    const response = await request(app).get("/?a=1&b=4")
    expect(response.body).toEqual({sum: 5})
  })
  it("Returns null on non-integers", async () => {
    const response = await request(app).get("/?a=a&b=b")
    expect(response.body).toEqual({sum: null})
  })
})
