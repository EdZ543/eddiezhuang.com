import Link from 'next/link'

export default function Button({ href, children }) {
  return (
    <a href={href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer">
      {children}
    </a>
  )
}