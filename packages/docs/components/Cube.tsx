import Link from 'next/link';

import Logo from './logo';

const Cube = () => (
  <Link href="/">
    <a className="flex items-center space-x-3">
      <span className="w-14 h-14 fill-current">
        <Logo />
      </span>
      <span className="text-display-sm bg-clip-text bg-gradient-to-r from-primary-900 to-primary-700 font-medium text-transparent">
        Cube
      </span>
    </a>
  </Link>
);
export default Cube;
