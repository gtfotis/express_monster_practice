const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: "Welcome to the Monster Page",
        },
        partials: {
            partial: "partial-index"
        }
    })
})



module.exports = router;