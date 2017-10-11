var UserSQL={
  insert:'INSERT INTO User(password,username) VALUES(?,?)',
  queryAll:'SELECT * FROM User',
  getUserById:'SELECT * FROM user WHERE id = ?'
};
module.exports=UserSQL;