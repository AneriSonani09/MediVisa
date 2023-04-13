const router = require("express").Router();
const uploads = require("../models/uploads");
router.post("/", async(req, res) => {
    console.log("Joyijj")
    try{
        console.log(req.body.y)
        const user = (req.body.y);
        const isUpload = await uploads.find({User: user});
        // console.log("[][][]");
        // console.log(isUpload);
        return res.status(201).json({isUpload});
    }catch(error){
        console.log(error);
        return res.status(500).json({error});
    }
});

module.exports = router;