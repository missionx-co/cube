import { Transition } from '@cube-ui/components';
import { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';

interface IPage {
  title?: string;
  description?: ReactNode;
}

const Page: FC<IPage> = ({ title, description, children }) => {
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    let timeout = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Transition
      show={show}
      enter="translate-x-0 opacity-100"
      exit="translate-x-10 opacity-0"
      duration={100}
      className="container px-20 py-16 mx-auto transition duration-300 ease-in-out transform"
    >
      <header className="mb-24">
        <h1 className="text-display-xl mb-5 font-semibold text-gray-900">
          {title}
        </h1>
        {description && <p className="text-xl text-gray-500">{description}</p>}
      </header>

      {children}
    </Transition>
  );
};

export default Page;
