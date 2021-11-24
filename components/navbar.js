import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex fixed h-32 top-0 bg-lightBlue justify-center">
      <ul className="bg-darkBlue">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Experience</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;