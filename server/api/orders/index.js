const router = require("express").Router();
const { all, awaiting } = require("./controller");

router.get("/all", all);
router.get("/awaiting", awaiting);

module.exports = router;
