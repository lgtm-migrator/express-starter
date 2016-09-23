module.exports = () => {
  return req => {
    const err = new Error('Not Found');
    err.status = 404;
    req.next(err);
  }
}