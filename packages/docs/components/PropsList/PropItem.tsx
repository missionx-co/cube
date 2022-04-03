import { FC } from 'react';

import { Prop } from './IPropsList';

const PrropItem: FC<Prop> = ({
  name,
  type,
  description,
  default: defaultValue,
}) => (
  <div className="text-md flex flex-col">
    <h4 className="pb-2 mt-0 font-normal border-b border-gray-300 border-dashed">
      <span className="bg-primary-100 text-primary-500 p-1">{name}</span>
    </h4>
    <div className="space-y-1">
      <p className="flex flex-row items-center m-0 space-x-10">
        <strong className="w-32">Type</strong>
        <span className=" text-primary-500 px-4 py-1 font-mono">{type}</span>
      </p>
      {description && (
        <p className="flex flex-row items-center m-0 space-x-10">
          <strong className="w-32">Description</strong>
          <span className="px-4 py-1 font-mono">{description}</span>
        </p>
      )}
      {defaultValue && (
        <p className="flex flex-row items-center m-0 space-x-10">
          <strong className="w-32">Default</strong>
          <span className="px-4 py-1 font-mono">{defaultValue}</span>
        </p>
      )}
    </div>
  </div>
);

export default PrropItem;
