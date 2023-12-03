const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// get all todo
router.get("/", (req, res) => {});

// get todo by id
router.get("/:id", (req, res) => {});

// post todo
router.post("/", async (req, res) => {
	try {
		const newTodo = await Todo(req.body);
		const todo = await newTodo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

// post multiple todo
router.post("/", (req, res) => {});

// put todo
router.put("/", (req, res) => {});

// delete todo
router.delete("/", (req, res) => {});

module.exports = router;
