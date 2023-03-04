const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    // const loggedUser = req.body;
    //console.log("Jiiiii");
    // console.log(loggedUser);
    const { error } = validate(req.body);
    console.log(error);

    if (error)
      return res.status(400).send({ message: error.details[0].message });
    
    const user = await User.findOne({ email: req.body.email });
    //console.log("Jiiiii");
    const loggedUser=user;
    //console.log(loggedUser);
    console.log("....");
    console.log("Jiiiii");
    //console.log(loggedUser.email);
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
	// else{
		console.log("password validate");
		const obj = {
			loggedUser: user,
      // message: "logged in successfully",
		};
		console.log(loggedUser);
		console.log(loggedUser.firstName);
		console.log(loggedUser.lastName);
    return res.status(201).json(obj);
    // localStorage.setItem('userData', JSON.stringify(loggedUser));
	// }
    // const token = await user.generateAuthToken();
    // console.log(error);
    // res.status(201).json(obj)
    // return res.status(200).send({message: "logged in successfully"});
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
