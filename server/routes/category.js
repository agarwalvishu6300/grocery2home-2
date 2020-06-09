const express = require("express")
const router = express.Router();

const {getAllCategory , createCategory } = require("../controllers/category");


router.post("/category/create",createCategory);
router.get("/categories" , getAllCategory);


module.exports = router;