const router = require("express").Router();
const {bookings}  = require("../models/bookings");
const uploads = require("../models/uploads");

router.get("/", async (req, res) => {
	try {
		console.log(req.body);
		var allBookings = await bookings.find({});
		console.log("here we found all bookings");
		// console.log(allBookings);
		
		var myObj = [];
		console.log("here");
		for (let i = 0; i < allBookings.length; i++){
			var user = allBookings[i].userName + "." + allBookings[i].name;
			// uniqueName.push(allBookings[i].userName + "." + allBookings[i].name);
			const isUpload = await uploads.find({User: user});
			console.log("//////")
			// console.log(isUpload);
			const temp = {url: isUpload}
			// console.log(temp)
			// user={...user, ...temp}
			// console.log(user);
			allBookings[i]={...allBookings[i], ...temp}
			myObj=myObj.concat(allBookings[i]);
		}
		console.log(myObj);
		console.log("//////")
		

		return res.status(200).json({myObj});
	} catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;
