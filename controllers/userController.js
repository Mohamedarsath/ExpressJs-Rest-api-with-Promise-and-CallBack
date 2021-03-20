module.exports = function () {
  const userService = require('../services/userService.js');
  var userservice = new userService();
  this.usersListController = (req, callback) => {
    var response = {};
    userservice.usersListService(req, (result) => {
      console.log('usercontroller', result);
      response.data = result.data;
      callback(response);
    });
  };
  this.usersInsertController = (req, callback) => {
    var response = {};
    userservice.usersInsertService(req, (result) => {
      console.log('usercontroller', result);
      response.data = result.data;
      callback(response);
    });
  };
  this.usersListByIdController = (req, callback) => {
    var response = {};
    userservice.usersListByIdService(req, (result) => {
      // console.log('usercontroller', result);
      response.data = result.data;
      callback(response);
    });
  };
  this.userUpdateController = (req, callback) => {
    var response = {};
    userservice.userUpdateService(req, (result) => {
      // console.log('usercontroller', result);
      response.data = result.data;
      callback(response);
    });
  };

  this.userDeleteController = (req, callback) => {
    var response = {};
    userservice.userDeleteService(req, (result) => {
      // console.log('usercontroller', result);
      response.data = result.data;
      callback(response);
    });
  };
};
