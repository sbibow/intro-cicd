const request = require("supertest")
const app = require("./app")

test("Responds with hello world", async () => {
  const response = await request(app).get("/?a=1&b=4")
  expect(response.body).toEqual({sum: 5})
})