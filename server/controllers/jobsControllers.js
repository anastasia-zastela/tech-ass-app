const { jobs } = require('../mockData.js');

exports.getJobs = (req, res) => {
    let response = jobs;

    if(req.query.invitationFilterParam) {
        response = jobs.filter(job => job.invitationStatus);
    }

    if(req.query.dateToFilter) {
        const dateToFilter = req.query.dateToFilter;
        response = jobs.filter(job => !job.invitationStatus).filter(job => job.date.getDate() >= +dateToFilter && job.date.getDate() < +dateToFilter + 7);
    }

    res.json(response);
};

exports.changeJobStatus = (req, res) => {
    const id = req.params.id;

    const appliedJob = jobs.filter(job => job.id === +id);

    if(appliedJob.length !== 0) {
        if(req.body.changeInvitationStatus) {
            appliedJob[0].invitationStatus = false;
            res.json({
                message: "You succesfully declined this invitation!"
            })
            return;
        } 
        else {
            appliedJob[0].applied = true;
            res.json({
                message: "You succesfully applied for this job!"
            })
        }
    }
    else {
        res.status(404);
        throw new Error('Job not found')
    }
    
};
