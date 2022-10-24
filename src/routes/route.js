const express = require('express')
const router = express.Router();
const {shortenUrl, originUrl} = require('../controllers/urlController')

router.post("/url/shorten", shortenUrl)
router.get("/:urlCode", originUrl)

router.all('/*', async function (req, res) {
    return res.status(400).send({ status: false, message: "Page not found" })
})

module.exports = router