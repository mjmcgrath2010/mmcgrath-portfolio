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

export async function getStaticProps(context) {
    // MDX text - can be from a local file, database, anywhere
    const source = 'Some **mdx** text'
    const posts =  await axios.get(`${process.env.HOST}/api/posts`)

    const mdxSource = await serialize(source)
    return { props: { source: mdxSource } }
}

export async function getStaticPaths(context) {
   const posts =  await axios.get(`${process.env.HOST}/api/posts`)
    const paths = posts.data.map(({ slug }) => slug)

    return {
        paths: [
            // String variant:
            '/blog/first-post',
            ...paths
        ],
        fallback: false,
    }
}
