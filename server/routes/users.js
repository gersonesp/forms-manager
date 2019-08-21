const Router = require("express").Router;
const router = Router();
const User = require("../database/models/user");

router.post("/", async (req, res) => {
  const { firstName, lastName, email } = req.params;
  try {
    const newUser = await User.create(
      {
        firstName,
        lastName,
        email
      },
      {
        fields: ["firstName", "lastName", "email"]
      }
    );

    if (newUser) {
      return res.json({
        message: "User created successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
