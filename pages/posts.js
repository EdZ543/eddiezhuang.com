import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
import { format } from "date-fns";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function formatDate(date){
  var dateObj = new Date(date);
  return format(dateObj, "MMMM dd, yyyy");
}

export default function Posts({ allPostsData }) {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        {allPostsData.map(({ title, description, image, date }) => (
          <div className="flex sm:flex-row flex-col rounded-xl border-2 border-opacity-50 overflow-hidden">
            <div className="h-40 w-full relative sm:h-40 sm:w-40">
              <Image
                src={image}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="m-4">
              <h3 className="text-2xl"><b>{title}</b></h3>

              <p className="text-sm text-white text-opacity-50">By <b>Eddie Zhuang</b> on <b>{formatDate(date)}</b></p>

              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}