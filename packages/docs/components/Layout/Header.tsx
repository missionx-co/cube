import { Button } from '@cube-ui/components';
import { MenuIcon } from '@heroicons/react/outline';
import { FC } from 'react';

import Cube from '@components/Cube';

const Header: FC<{ onMenuClicked: () => void }> = ({ onMenuClicked }) => {
  return (
    <header className="lg:hidden h-20 py-2 border-b border-gray-200 shadow-md">
      <div className="container flex flex-row justify-between px-20 mx-auto">
        <Cube />

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
