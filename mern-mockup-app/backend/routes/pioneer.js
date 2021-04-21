const router = require('express').Router();
let Pioneer = require('../models/pioneer.model');

router.route('/').get((req, res) => {
    Pioneer.find()
        .then(pioneer => res.json(pioneer))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const pioneername = req.body.pioneername;
    const description = req.body.description;
    const newPioneer = new Pioneer({pioneername, description});

    newPioneer.save()
        .then(() => res.json('Pioneer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;