const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// get all todo
router.get("/", async (req, res) => {
	try {
		const allTodo = await Todo.find();
		res.status(200).json(allTodo);
	} catch (error) {
		res.send(404);
	}
});

// get todo by id
router.get("/:id", (req, res) => {});

// post todo
router.post("/add", async (req, res) => {
	try {
		const newTodo = await Todo(req.body);
		const todo = await newTodo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

// post multiple todo
router.post("/addMultiple", (req, res) => {});

// put todo
router.put("/update", async (req, res) => {
	try {
		if (!req.body.id && !req.body.status) {
			return res.status(500).json({ message: "Invalid id" });
		}
		const updatedTodo = await Todo.findByIdAndUpdate(
			{ _id: req.body.id },
			{
				$set: {
					status: req.body.status,
				},
			}
		);
		res.status(200).json(updatedTodo);
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

// delete todo
router.delete("/delete", async (req, res) => {
	try {
		const todo = await Todo.deleteOne({ _id: req.body.id });
		res.status(200).json(todo);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
