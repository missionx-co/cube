import { Pagination } from '@cube-ui/components';
import React, { FC, useState } from 'react';

import Example from '@components/Example';

const ControlledExample: FC = () => {
  const [currentPage, setCurrentPage] = useState<number | string>(1);

  return (
    <Example>
      <Pagination
        totalItems={100}
        itemsPerPage={5}
        currentPage={currentPage as number}
        onPageChange={setCurrentPage}
      />
    </Example>
  );
};

export default ControlledExample;
