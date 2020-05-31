const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const bodyParser = require('body-parser')
// const cors = require('cors')

// app.use(bodyParser.json());
// app.use(cors())

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
router.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/build/'))
})

module.exports = router;
