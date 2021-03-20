module.exports = function (server, validator) {
  const userController = require('./../controllers/userController');

  var bodyParser = require('body-parser');
  var urlencodedParser = bodyParser.json();

  const usercontroller = new userController();
  server.get('/userlist', urlencodedParser, (req, res) => {
    usercontroller.usersListController(req, (result) => {
      //  console.log('userroute', result);
      res.send(result.data);
    });
  });

  server.post('/userinsert', urlencodedParser, (req, res) => {
    usercontroller.usersInsertController(req, (result) => {
      // console.log('userroute', result);
      res.send(result.data);
    });
  });

  server.get('/userlist/:id', urlencodedParser, (req, res) => {
    usercontroller.usersListByIdController(req, (result) => {
      //      console.log('userlistbyid', result);
      res.send(result.data);
    });
  });
  server.post('/userupdate', urlencodedParser, (req, res) => {
    usercontroller.userUpdateController(req, (result) => {
      //      console.log('userlistbyid', result);
      res.send(result.data);
    });
  });

  server.post('/userdelete', urlencodedParser, (req, res) => {
    usercontroller.userDeleteController(req, (result) => {
      //      console.log('userlistbyid', result);
      res.send(result.data);
    });
  });
};
