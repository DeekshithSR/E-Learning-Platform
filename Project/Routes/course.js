const express = require("express");

const { Course, validate } = require("../models/courseModel");

const { Category } = require("../modls/categoriesModel");

const router = express.Router();

const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid Id");
  let course = new Course({
    title: req.body.title,
    category: {
      _id: category._id,
      name: category.name,
    },
    creator: req.body.creator,
    rating: req.body.rating,
  });
  course = await course.save();
  res.send(coursey);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid Id");
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      category: {
        _id: category._id,
        name: category.name,
      },
      creator: req.body.creator,
      rating: req.body.rating,
    },
    { new: true }
  );

  if (!course)
    return res.status(404).send("The course with given ID was not found");

  res.send(course);
});

router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course)
    return res.status(404).send("The course with given ID was not found");

  res.send(course);
});

router.get("/:id", (req, res) => {
  const course = await.Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("The course with given ID was not found");
  res.send(course);
});

module.exports = router;
