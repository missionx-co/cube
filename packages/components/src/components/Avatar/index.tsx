import getAvatarStyles from '@cube-ui/styles/dist/avatar';
import get from 'lodash/get';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import IAvatar from './IAvatar';

const Avatar: FC<IAvatar> = ({
  image,
  alt,
  name,
  area,
  subtext,
  alternativeNode,
  classNames,
}) => {
  const styles = getAvatarStyles(area as string, classNames);

  return (
    <div className={styles.userAvatarContainerClassName}>
      <div role="img" aria-label={alt} className={styles.avatarClassName}>
        {Boolean(image) ? <img src={image} alt={alt} /> : alternativeNode}
      </div>
      {(Boolean(name) || Boolean(subtext)) && (
        <div className={styles.userInfoContainerClassName}>
          {Boolean(name) && <div className={styles.nameClassName}>{name}</div>}
          {Boolean(subtext) && (
            <div className={styles.subTextClassName}>{subtext}</div>
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
