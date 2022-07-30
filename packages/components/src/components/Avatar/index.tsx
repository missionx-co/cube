import get from 'lodash/get';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import IAvatar from './IAvatar';
import {
  avatarStyles,
  nameStyles,
  subTextStyles,
  userAvatarStyles,
  userTextStyles,
} from './styles';

const Avatar: FC<IAvatar> = ({
  image,
  alt,
  name,
  area,
  subtext,
  alternativeNode,
  classNames,
}) => {
  const userAvatarClassName = twMerge(
    userAvatarStyles.base,
    get(userAvatarStyles.area, area as string),
    classNames?.containerClassName,
  );

  const avatarClassName = twMerge(
    avatarStyles.base,
    get(avatarStyles.area, area as string),
    classNames?.avatarClassName,
  );

  const userInfoClassName = twMerge(
    userTextStyles.base,
    get(userTextStyles, ['area', area as string]),
  );

  const nameClassName = twMerge(
    nameStyles.base,
    get(nameStyles, ['area', area as string]),
  );

  const subTextClassName = twMerge(
    subTextStyles.base,
    get(subTextStyles, ['area', area as string]),
    classNames?.userSubtextClassName,
  );

  return (
    <div className={userAvatarClassName}>
      <div role="img" aria-label={alt} className={avatarClassName}>
        {Boolean(image) ? <img src={image} alt={alt} /> : alternativeNode}
      </div>
      {(Boolean(name) || Boolean(subtext)) && (
        <div className={userInfoClassName}>
          {Boolean(name) && <div className={nameClassName}>{name}</div>}
          {Boolean(subtext) && (
            <div className={subTextClassName}>{subtext}</div>
          )}
        </div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  area: 'base',
};

export default Avatar;
