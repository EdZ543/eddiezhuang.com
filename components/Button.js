import Link from 'next/link'

export default function Button({ href, children }) {
  return (
    <Link href={href} passHref>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        {children}
      </button>
    </Link>
  )
}