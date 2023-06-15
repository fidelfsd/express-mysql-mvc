const Student = require("../../models/student");

module.exports = async (req, res) => {
   try {
      const students = await Student.fecthAll();
      res.status(200).json(students);
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
