// common/res.js

module.exports.success = (res, data, message = "Success") => {
  return res.status(200).json({
    Data: data,
    IsSuccess: true,
    Message: message,
    Status: true,
  });
};

module.exports.error = (res, message = "Error", statusCode = 500) => {
  return res.status(statusCode).json({
    Data: null,
    IsSuccess: false,
    Message: message,
    Status: false,
  });
};
