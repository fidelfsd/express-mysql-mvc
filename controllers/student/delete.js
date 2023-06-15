const Student = require("../../models/student");

module.exports = async (req, res) => {
   const { id } = req.params;
   Student.removeById(id)
      .then((data) => {
         res.json(data);
      })
      .catch((error) => {
         res.json(error.message);
      });
};
