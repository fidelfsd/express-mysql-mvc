// Creamos un modelo para cada tabla de la base de datos
const connectionDatabase = require("../db/db");

// los nombre de las variable para los modelos se escriben con la primera letra en mayusculas. y se define en singular
const Student = {};

Student.fecthAll = () => {
   return new Promise((resolve, reject) => {
      if (!connectionDatabase)
         reject(new Error("Connection failed, cannot connect to the database"));

      const SQL = "SELECT * FROM students;";

      connectionDatabase.query(SQL, (error, rows) => {
         if (error) return reject(error);
         else resolve(rows);
      });
   });
};

// Buscar por id --------------------------

Student.ById = (id) => {
   return new Promise((resolve, reject) => {
      if (!connectionDatabase)
         reject(new Error("Connection failed, cannot connect to the database"));

      const SQL = `SELECT * FROM students WHERE id = ${id};`;

      connectionDatabase.query(SQL, (error, rows) => {
         if (error) return reject(error);
         else resolve(rows);
      });
   });
};

// UPDATE un usuario

Student.updateUser = (id, user) => {
   // user = {
   //    user_name: 'Bob',
   //    active: 'yes',
   // }

   const allowedColumns = ["user_name", "user_last_name", "birthday", "active"];
   const statements = [];

   // UPDATE students SET user_name='Bob', user_last_name='Blue' WHERE id=4

   for (const key in user) {
      if (allowedColumns.includes(key)) {
         const statement = `${key}='${user[key]}'`;
         statements.push(statement);
      }
   }

   return new Promise((resolve, reject) => {
      if (!connectionDatabase)
         reject(new Error("Connection failed, cannot connect to the database"));

      const sqlSet = statements.join(",");
      const SQL = `UPDATE students SET ${sqlSet} WHERE id = '${id}'`;

      console.log(SQL);

      connectionDatabase.query(SQL, (error, rows) => {
         if (error) return reject(error);
         else resolve(rows);
      });
   });
};

Student.newStudent = (user) => {
   const { user_name, user_last_name, birthday, active } = user;

   return new Promise((resolve, reject) => {
      if (!connectionDatabase)
         reject(new Error("Connection failed, cannot connect to the database"));

      const SQL = `INSERT INTO students (user_name, user_last_name, birthday, active) VALUES ('${user_name}', '${user_last_name}', '${birthday}', '${active}')`;

      connectionDatabase.query(SQL, (error, rows) => {
         if (error) return reject(error);
         else resolve(rows);
      });
   });
};

// Borrar por id --------------------------

Student.removeById = (id) => {
   return new Promise((resolve, reject) => {
      if (!connectionDatabase)
         reject(new Error("Connection failed, cannot connect to the database"));

      const SQL = `DELETE FROM students WHERE id = ${id};`;

      connectionDatabase.query(SQL, (error, rows) => {
         if (error) return reject(error);
         else resolve(rows);
      });
   });
};

module.exports = Student;
