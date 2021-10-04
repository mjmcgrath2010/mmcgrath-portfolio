import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import axios from 'axios'
import { useRouter } from 'next/router'
import BlogPost from "../../layouts/BlogPost";


export default function TestPage({ source }) {
    return (
        <BlogPost className="wrapper">
            <MDXRemote {...source} />
        </BlogPost>
    )
}

export async function getStaticProps({params: {slug}}) {
    // MDX text - can be from a local file, database, anywhere
    const data =  await axios.get(`${process.env.HOST}/api/posts/blog/${slug}`)
    const [post] = data.data
    const mdxSource = await serialize(post.source)
    return { props: { source: mdxSource } }
}

export async function getStaticPaths() {
   const posts =  await axios.get(`${process.env.HOST}/api/posts`)
  const paths = posts.data.map(({ slug }) => slug)
    return {
        paths,
        fallback: false,
    }
}
