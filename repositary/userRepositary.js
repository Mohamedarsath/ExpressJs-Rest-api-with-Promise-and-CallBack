module.exports = function () {
  const mysql = require('mysql');
  const db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users',
    multipleStatements: true,
  });

  this.usersList = (data) => {
    var output = {};
    return new Promise(function (resolve) {
      db_con.query('SELECT * FROM usertable', (err, result) => {
        // console.log('repositary', result);

        if (err) {
          console.log(err);
        } else {
          output.data = result;

          resolve(output);
        }
      });
    });
  };

  this.userInsert = (data) => {
    var output = {};
    const email = data.body.email;
    const phoneno = data.body.phoneno;
    const address = data.body.address;
    const gender = data.body.gender;
    return new Promise(function (resolve) {
      db_con.query(
        'INSERT INTO usertable(email,phoneno,address,gender) VALUES(?,?,?,?)',
        [email, phoneno, address, gender],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            output.data = result;

            resolve(output);
          }
        }
      );
    });
  };

  this.userListbyId = (data) => {
    var output = {};
    const id = data.params.id;
    return new Promise(function (resolve) {
      db_con.query('SELECT * FROM usertable WHERE id=?', [id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          output.data = result;
          resolve(output);
        }
      });
    });
  };
  this.userUpdate = (data) => {
    var output = {};

    const id = data.body.id;
    const email = data.body.email;
    const phoneno = data.body.phoneno;
    const address = data.body.address;
    const gender = data.body.gender;
    return new Promise(function (resolve) {
      db_con.query(
        'UPDATE usertable SET email=?,phoneno=?,address=?,gender=? WHERE id=?',
        [email, phoneno, address, gender, id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            output.data = result;
            resolve(output);
          }
        }
      );
    });
  };

  this.userDelete = (data) => {
    var output = {};

    const id = data.body.id;
    return new Promise(function (resolve) {
      db_con.query('DELETE FROM usertable WHERE id=?', [id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          output.data = result;
          resolve(output);
        }
      });
    });
  };
};
