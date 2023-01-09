const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = (txtPassword) => {
    const hash = bcrypt.hashSync(txtPassword, saltRounds);
    return hash;
}

module.exports = {
    hashPassword
};