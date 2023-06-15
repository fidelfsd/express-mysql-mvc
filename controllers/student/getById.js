const Student = require("../../models/student");

module.exports = async (req, res) => {
   try {
      const { id } = req.params;
      const data = await Student.ById(id);

      console.log(data);

      if (data.length > 0) {
         res.status(200).json(data[0]);
      } else {
         res.status(404).json({
            status: "Error",
            message: `Can't find student `,
         });
      }
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
