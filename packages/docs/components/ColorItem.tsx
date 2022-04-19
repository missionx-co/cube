import clsx from 'classnames';
import { FC } from 'react';

interface IColorItem {
  name: string;
  description?: string;
  pallete: {
    shade: number;
    hex: string;
    className: string;
  }[];
}

const ColorItem: FC<IColorItem> = ({ name, description, pallete }) => (
  <div className="lg:flex-row not-prose flex flex-col items-start gap-3">
    <div className="lg:w-1/3 flex flex-col flex-shrink-0 w-full space-y-1">
      <h4 className="text-lg font-medium text-gray-900">{name}</h4>
      {Boolean(description) && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
    <div className="flex flex-wrap gap-4">
      {pallete.map((item) => (
        <div key={item.className} className="flex flex-col space-y-1 text-sm">
          <div
            className={clsx(
              'w-16 h-16 rounded-lg block border border-gray-100',
              item.className,
            )}
          />
          <span className="text-gray-900">{item.shade}</span>
          <span className="text-gray-300">{item.hex}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ColorItem;
