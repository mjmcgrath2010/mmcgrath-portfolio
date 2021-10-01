import dbConnect from "../../utils/dbConnect";
import Post from "../../models/Post";

export default async function handler(req, res) {
    const {query} = req
    await dbConnect()

    const post = new Post({title: 'Hello World', slug: '/blog/hello-world', })

    await post.save()

    res.json(post)
}
