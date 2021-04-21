const router = require('express').Router();
const Timeline = require('../models/timeline.model');
let Pioneer = require('../models/timeline.model');

router.route('/').get((req, res) => {
    Timeline.find()
        .then(timeline => res.json(timeline))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const timelinename = req.body.timelinename;
    const timelinedescription = req.body.timelinedescription;
    const timelinedays = Date.parse(req.body.timelinedays);
    const newTimeline = new Timeline({timelinename, timelinedescription, timelinedays});

    newTimeline.save()
        .then(() => res.json('Timeline added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;