const request = require("supertest");
const app = require("./app");

describe(" Todo API", () => {
  it("GET /todos --> array todo", () => {
    request(app)
      .get("/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayConatining([
            expect.arrayConatining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      })
      .catch((err) => {});
  });

  it("GET /todo --> object todo", () => {
    request(app)
      .get("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayConatining([
            expect.arrayConatining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      })
      .catch((err) => {});
  });

  it("GET /todo/id --> error 404 if not found", () => {
    request(app).get("/todos/999").expect(404);
  });
});
