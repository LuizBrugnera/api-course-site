const { User, View } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (email, password) => {
    const user = await User.findOne({
      where: { email },
      include: [View],
    });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new Error("Credenciais inválidas");
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      views: user.Views,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return token;
  },
};
