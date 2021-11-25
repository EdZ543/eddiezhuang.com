import { BsTextIndentLeft } from 'react-icons/bs'
import { getSortedPostsData } from '../lib/posts'

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
    <>
      <div className="grid grid-cols-1 gap-3">
        {allPostsData.map(({ title, description, image, date }) => (
          <div className="flex flex-col rounded-md border-2 border-opacity-50">
          </div>
        ))}
      </div>
    </>
  )
}