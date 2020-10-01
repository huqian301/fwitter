const { findAllUsers } = require('./userQueries');
const connection = require('../config/connection');

const fecthUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fecthUsers,
};
