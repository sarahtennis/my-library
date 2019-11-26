const request = require("supertest");

const server = require("../api/server.js");

// tests for the GET test endpoint
describe("Test /test endpoint", () => {
  it("GET should return a JSON object", async () => {
    let response = await request(server).get("/test");
    expect(typeof response.body).toEqual("object");
    expect(response.body).toEqual({ server: "running" });
  });
});
