module.exports = function () {
  const usersRepository = require('../repositary/userRepositary.js');
  var userrepositary = new usersRepository();
  this.usersListService = async (data, callback) => {
    var response = {};
    try {
      var userListData = await userrepositary.usersList(data);
      // console.log('userservice', userListData);
      response.data = userListData;
      callback(response);
    } catch (err) {
      console.log(err);
      err.error = true;
      err.msg = 'OOPS';
      callback(err);
    }
  };

  this.usersInsertService = async (data, callback) => {
    var response = {};
    try {
      var userInsertData = await userrepositary.userInsert(data);
      //   console.log('userservice', userInsertData);
      response.data = userInsertData;
      callback(response);
    } catch (err) {
      console.log(err);
      err.error = true;
      err.msg = 'OOPS';
      callback(err);
    }
  };
  this.usersListByIdService = async (data, callback) => {
    var response = {};
    try {
      var userListByIdData = await userrepositary.userListbyId(data);

      response.data = userListByIdData;
      callback(response);
    } catch (err) {
      console.log(err);
      err.error = true;
      err.msg = 'OOPS';
      callback(err);
    }
  };
  this.userUpdateService = async (data, callback) => {
    var response = {};
    try {
      var userUpdateData = await userrepositary.userUpdate(data);

      response.data = userUpdateData;
      callback(response);
    } catch (err) {
      console.log(err);
      err.error = true;
      err.msg = 'OOPS';
      callback(err);
    }
  };

  this.userDeleteService = async (data, callback) => {
    var response = {};
    try {
      var userDeleteData = await userrepositary.userDelete(data);

      response.data = userDeleteData;
      callback(response);
    } catch (err) {
      console.log(err);
      err.error = true;
      err.msg = 'OOPS';
      callback(err);
    }
  };
};
