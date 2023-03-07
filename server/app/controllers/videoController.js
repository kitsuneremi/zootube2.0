const Video = require('../models/Video');


class VideoController {
    getVideo(req, res, next) {
        Video.findById(req.params.id)
        .lean()
        .then(video => res.render(`watch?v=${req.params.id}`,{video}))
        .catch(next)

    }

    getListVideo(req, res, next) {
        Video.find({})
        .lean()
        .then(videos => res.render('/pages/home/Home.js',{videos}));
    }
}

module.exports = new VideoController();