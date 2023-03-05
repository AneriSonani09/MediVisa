const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    console.log(error);

    if (error)
      return res.status(400).send({ message: error.details[0].message });
    
    const user = await User.findOne({ userName: req.body.userName });
    const loggedUser=user;
    console.log("....");
    console.log("Jiiiii");
    if (!user)
      return res.status(401).send({ message: "Invalid Username or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
		console.log("password validate");
		const obj = {
			loggedUser: user,
		};
		console.log(loggedUser);
		console.log(loggedUser.firstName);
		console.log(loggedUser.lastName);
    return res.status(201).json(obj);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
