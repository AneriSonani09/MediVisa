const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth.js');
const Customer = require("../models/customerModel");
 
router.post("/", auth, async (req, res) => {
    try {
        const { name } = req.body; 
        
        const newCustomer = new Customer({
            name
        });

        const savedCustomer = await newCustomer.save();

        res.json(savedCustomer);
    }

    catch (err) {
         console.error(err);
         res.status(500).send();
    }
})

router.get("/", auth, async (req, res) => {
  try {
      const customer = await Customer.find();
      res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;