import { getSortedPostsData } from '../lib/posts'
import { formatDate } from '../lib/formatDate'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-3">
        {allPostsData.map((post) => (
          <Link href={"/posts/" + post.id}>
            <a key={post.id} className="flex sm:flex-row flex-col rounded-xl border-2 border-opacity-50 overflow-hidden">
              <div className="h-40 w-full relative sm:h-40 sm:w-40">
                <Image
                  src={post.image}
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className="m-4">
                <h3 className="text-2xl"><b>{post.title}</b></h3>

                <p className="text-sm text-white text-opacity-50">By <b>Eddie Zhuang</b> on <b>{formatDate(post.date)}</b></p>

                <p>{post.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}