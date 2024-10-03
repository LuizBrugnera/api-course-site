module.exports = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (userRole === requiredRole || userRole === "admin") {
      next();
    } else {
      res
        .status(403)
        .json({ error: "Acesso negado: privilégios insuficientes" });
    }
  };
};
