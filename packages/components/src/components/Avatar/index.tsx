import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import IAvatar from './IAvatar';

const UserAvatarContainer = styled('div', {
  ...tw`relative flex items-center`,
  variants: {
    area: {
      sm: tw`space-x-2.5`,
      base: tw`space-x-3`,
      lg: tw`space-x-3`,
      xl: tw`space-x-4`,
    },
  },
});

const AvatarContainer = styled('div', {
  ...tw`bg-primary-50 text-primary-600 flex items-center justify-center overflow-hidden rounded-full`,
  variants: {
    area: {
      sm: tw`w-8 h-8`,
      base: tw`w-10 h-10`,
      lg: tw`w-12 h-12`,
      xl: tw`w-14 h-14`,
    },
  },
});

const UserTextContainer = styled('div', tw`flex flex-col items-start`);

const NameContainer = styled('div', {
  ...tw`font-medium text-gray-700`,
  variants: {
    area: {
      sm: tw`text-sm`,
      base: tw`text-sm`,
      lg: tw`text-base`,
      xl: tw`text-lg`,
    },
  },
});

const SubTextContainer = styled('div', {
  ...tw`font-normal text-gray-500`,
  variants: {
    area: {
      sm: tw`text-xs`,
      base: tw`text-sm`,
      lg: tw`text-base`,
      xl: tw`text-base`,
    },
  },
});

const Avatar: FC<IAvatar> = ({
  image,
  alt,
  name,
  area,
  subtext,
  alternativeNode,
  classNames,
}) => {
  return (
    <UserAvatarContainer area={area} className={classNames?.containerClassName}>
      <AvatarContainer area={area} className={classNames?.avatarClassName}>
        {Boolean(image) ? <img src={image} alt={alt} /> : alternativeNode}
      </AvatarContainer>
      {(Boolean(name) || Boolean(subtext)) && (
        <UserTextContainer className={classNames?.userInfoClassName}>
          {Boolean(name) && (
            <NameContainer className={classNames?.userNameClassName}>
              {name}
            </NameContainer>
          )}
          {Boolean(subtext) && (
            <SubTextContainer className={classNames?.userSubtextClassName}>
              {subtext}
            </SubTextContainer>
          )}
        </UserTextContainer>
      )}
    </UserAvatarContainer>
  );
};

Avatar.defaultProps = {
  area: 'base',
};

export default Avatar;
