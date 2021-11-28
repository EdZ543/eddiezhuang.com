import Link from 'next/link'

export default function SecondaryButton({ href, children }) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-gray-50 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {children}
    </button>
  )
}