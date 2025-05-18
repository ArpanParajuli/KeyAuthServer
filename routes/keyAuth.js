const express = require("express");
const router  = express.Router(); 

const app = express();
app.use(express.json());



router.post("/key/user/auth" , async (req ,res) => {
    const key = req.body.userkey;
    console.log(key);
    if(key === "SoloKey123"){
        res.status(200).json({message : "Authenticated!" , success : true});
    }
    else{
        res.status(400).json({message : "Invalid!" , success : false});
    }
});


module.exports = router;