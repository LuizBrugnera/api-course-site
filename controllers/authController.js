const authService = require("../services/authService");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },
};
