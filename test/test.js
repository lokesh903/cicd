const request = require("supertest");
const app = require("../index");
describe("GET /", () => {
  it("respond with Server is running", (done) => {
    request(app).get("/cicd-test/").expect("Server is running test4", done);
  })
});