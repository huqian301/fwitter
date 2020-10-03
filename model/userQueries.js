const findAllUsers = 'SELECT * FROM users;';
const insertUserQuery = 'INSERT INTO users (username) VALUE (?);';

module.exports = {
  findAllUsers,
  insertUserQuery,
};
