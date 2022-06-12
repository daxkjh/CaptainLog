const express = require("express")
const router = express.Router()
const { getLogs,postLogs,seedLogs } = require("../controllers/log_controller")

router.get("/seed", seedLogs)
router.route("/").get(getLogs).post(postLogs)
// router.routes("/:id").get().put().delete()


module.exports = router