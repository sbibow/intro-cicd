const request = require("supertest")
const app = require("./app")

test("Responds with hello world", async () => {
  const response = await request(app).get("/")
  expect(response.body).toEqual({hello: "world"})
})