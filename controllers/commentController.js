const {Comments} = require('../models/models');
class CommentController {
    async getAll (req, res) {
        const comments = await Comments.findAll()
        return res.json(comments);
    }

    async create (req, res) {
        const {author, comment, parentID} = req.body;
        const comments = await Comments.create({author, comment, parentID});
        return res.json(comments);
    }
    async delete (req, res) {
        const id = Number(req.body.id);
        const comments = await Comments.destroy({where: {id: id}})
        return res.json(comments);
    }
}
module.exports = new CommentController();