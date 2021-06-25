const express = require("express");
const { changeJobStatus, getJobs } = require('../controllers/jobsControllers.js');

const router = express.Router();

router.route('/').get(getJobs);
router.route('/:id').post(changeJobStatus);

module.exports = {
    router
}
