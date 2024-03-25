const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Authorization failed: Only admins allowed' });
    }
    next();
  };
  
  module.exports = authorizeAdmin;  