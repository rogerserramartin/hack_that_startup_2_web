const router = require('express');
module.exports = router;

router.get("/", (req, res) =>{
    res.send("<h1>Hello World</h1>");
});

module.exports = router;