const Student = require("../../models/student");

module.exports = async (req, res) => {
   try {
      const { user_name, user_last_name, birthday, active } = req.body; // en el structuring los nombre tienen que coincidir con los nombres declarados en el obejeto hecho en Postman.
      const user = { user_name, user_last_name, birthday, active };
      await Student.newStudent(user);
      res.status(201).json({
         status: "Success",
         message: "User created successfully",
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
