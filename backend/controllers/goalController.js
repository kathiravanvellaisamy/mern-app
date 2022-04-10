const asyncHandler = require("express-async-handler");

// @dec  Get Goals
// @route GET api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Hey Kathir! Your goals are here!" });
});

// @desc  Set Goals
// @route POST api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Text Field!");
  }
  res.status(200).json({ message: "Create your goals!" });
});

// @desc  Update Goals
// @route PUT api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc  Delete Goals
// @route DELETE api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
