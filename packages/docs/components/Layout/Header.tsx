import { MenuIcon } from '@heroicons/react/outline';
import { FC } from 'react';

import { Button } from '@cube/components';

import Logo from '@components/logo';

const Header: FC<{ onMenuClicked: () => void }> = ({ onMenuClicked }) => {
  return (
    <header className="lg:hidden h-20 py-2 border-b border-gray-200 shadow-md">
      <div className="container flex flex-row justify-between px-20 mx-auto">
        <div className="flex items-center space-x-3">
          <span className="w-14 h-14 fill-current">
            <Logo />
          </span>
          <span className="text-display-sm bg-clip-text bg-gradient-to-r from-primary-900 to-primary-700 font-medium text-transparent">
            Cube
          </span>
        </div>

        <Button
          variant="outline"
          area="sm"
          className="hover:bg-gray-100 text-gray-600 border-gray-300"
          onClick={onMenuClicked}
        >
          <MenuIcon className="w-7 h-7" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
