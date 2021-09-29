// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnect";
import Post from "../../models/Post";

export default async function handler(req, res) {
  const {method} = req
  await dbConnect()

  switch (method) {
    case 'GET':
      return Post.find({}).then(posts => res.json(posts))
    case 'POST':
      return res.status(400).json({success: false});
    default:
      return res.status(400).json({success: false})
  }
}
