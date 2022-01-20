const express = require("express");
const createError = require("http-errors");
const router = express.Router();

const todos = [{ id: 1, name: "test", completed: true }];

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res, next) => {
  const foundTodo = todos.find((todo) => todo.id === Number(req.params.id));

  if (!foundTodo) {
    return next(createError(404, "Not Found"));
  }

  res.json(foundTodo);
});

module.exports = router;
