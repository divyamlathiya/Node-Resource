const constant = {
    MONGO_DB : process.env.DB_NAME,
    Models : {
        users : users,
        admins : admins
    }
};

module.exports = constant;