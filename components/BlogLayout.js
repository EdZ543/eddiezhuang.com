import { formatDate } from '../lib/formatDate'

export default function Layout({ meta, id, children }) {
  return (
    <div>
      <h1 className="text-5xl text-blue-400"><b>{meta.title}</b></h1>
      <div className="text-sm text-white text-opacity-50 mb-10">
        <p>Eddie Zhuang</p>
        <p>{formatDate(meta.date)}</p>
      </div>

      <div className="prose">
        {children}
      </div>

      <script src="https://utteranc.es/client.js"
        repo="EdZ543/eddiezhuang.com-Comments"
        issue-term={id}
        theme="dark-blue"
        crossOrigin="anonymous"
        async>
      </script>
    </div>
  )
}