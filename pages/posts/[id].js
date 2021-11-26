import Layout from '../../components/Layout'
import BlogLayout from '../../components/BlogLayout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getPostById, getSortedPostsData } from '../../lib/posts'
import rehypeHighlight from 'rehype-highlight'

export default function Post({ meta, content }) {
  return <Layout>
    <BlogLayout meta={meta}>
      <div className="w-full max-w-screen-md">
        <MDXRemote {...content} />
      </div>
    </BlogLayout>
  </Layout>
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id)
  
  const content = await serialize(post.content,
    {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      }
    }  
  );

  return {
    props: {
      meta: post.meta,
      content
    }
  }
}

export async function getStaticPaths() {
  const posts = getSortedPostsData()

  return {
    paths: posts.map(post => {
      return {
        params: {
          id: post.id
        }
      }
    }),
    fallback: false
  }
}