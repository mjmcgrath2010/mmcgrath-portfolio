import dbConnect from "../../../../utils/dbConnect";
import Post from "../../../../models/Post";

export default async function handler(req, res) {
    const {method, query: {pid}} = req
    await dbConnect()

    switch (method) {
        case 'GET':
            return Post.find( { slug: `/blog/${pid}` }).then(posts => res.json(posts))
        case 'POST':
            return res.status(400).json({success: false});
        default:
            return res.status(400).json({success: false})
    }
}
