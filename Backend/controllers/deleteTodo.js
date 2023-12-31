const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Delete todo id", id);
    await Todo.findByIdAndDelete(id);
    res.json({
      success: true,
      message: `Todo deleted`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: "Server Error",
    });
  }
};
