import Posts from '../model/posts';

const posts = new Posts();

export default class PostsController {
    getPosts(req, res) {
        res.json({
            posts: posts.getPosts(req.query.sortOrder)
        });
    }
}
