import { FC } from 'react';

import IPropsList from './IPropsList';
import PrropItem from './PropItem';

const PropsList: FC<IPropsList> = ({ props }) => (
  <div className="flex flex-col space-y-10">
    {props.map((prop) => (
      <PrropItem key={prop.name} {...prop} />
    ))}
  </div>
);

export default PropsList;
