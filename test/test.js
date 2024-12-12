const request = require("supertest");
const app = require("../index");
describe("GET /", () => {
  it("respond with Server is running", (done) => {
    request(app).get("/").expect("HServer is running", done);
  })
});