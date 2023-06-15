const Student = require("../../models/student");

module.exports = async (req, res) => {
   const { id } = req.params;

   try {
      const user = {
         ...req.body,
         //   active: "no", // proteger un valor de la tabla
      };

      await Student.updateUser(id, user);
      res.status(202).json({
         status: "Success",
         message: "User updated successfully",
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
