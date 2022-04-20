import clsx from 'classnames';
import { FC } from 'react';

interface ITextItem {
  name: string;
  description: string;
  className: string;
}

const weights = ['Regular', 'Medium', 'Semibold', 'Bold'];
const weightsClassName = [
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
];

const TextItem: FC<ITextItem> = ({ name, description, className }) => (
  <div className="not-prose block w-full">
    <div className="lg:flex-row flex flex-col justify-between gap-2 pb-2 mb-2 text-sm text-base text-gray-500 border-b border-gray-300">
      <h4>
        {name} ({className})
      </h4>
      <span>{description}</span>
    </div>
    <div className="lg:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-10">
      {weights.map((weight, index) => (
        <div
          key={weight}
          className={clsx(
            'flex flex-col space-y-4 items-start',
            className,
            weightsClassName[index],
          )}
        >
          <span>{name}</span>
          <span>{weight}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TextItem;
