import { formatDate } from '../lib/formatDate'
import Comments from './Comments'
import LikeButton from './LikeButton'

export default function Layout({ meta, id, children }) {
  return (
    <div className="max-w-2xl w-full">
      <h1 className="text-5xl text-blue-500"><b>{meta.title}</b></h1>

      <div className="text-sm text-white text-opacity-50 mb-10">
        <p>Written by Eddie Zhuang on {formatDate(meta.date)}</p>
      </div>

      <LikeButton />

      <div className="max-w-screen-md prose">
        {children}
      </div>

      <h2 className="text-2xl pt-28"><b>Comments</b></h2>
      <Comments id={id}/>      
    </div>
  )
}