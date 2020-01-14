import { getPosts } from "../../src/contact/posts";

const posts = getPosts();

export default async (req, res) => {
  res.json({ posts });
};
