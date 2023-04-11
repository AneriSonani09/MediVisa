const router = require("express").Router();
const uploadmodel = require('../models/uploads')

router.post("/", async (req, res) => {
    console.log("/*/*/")
    console.log(req.body)
    console.log(req.body.User)
    console.log(req.body.Attach)
    try {
        const upload = new uploadmodel.uploads(req.body);
        await upload.save();
        const uploadDoc = req.body;
        console.log(uploadDoc);
        const obj = {
            uploadDoc: upload,
      };
        return res.status(200).json(obj);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;