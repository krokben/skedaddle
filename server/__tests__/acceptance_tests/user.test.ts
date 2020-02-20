import * as request from "supertest";
import { app } from "../../server";

describe("GET /users", () => {
  it("SHOULD return 200", done => {
    request(app)
      .get("/users")
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toBe(200);
        done();
      });
  });
});
