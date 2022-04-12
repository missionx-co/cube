import { ReactNode } from 'react';

export default interface IAvatar {
  image?: string;
  alt?: string;
  alternativeNode?: ReactNode;
  area: 'sm' | 'base' | 'lg' | 'xl';
  name?: ReactNode;
  subtext?: ReactNode;
  classNames?: {
    containerClassName?: string;
    avatarClassName?: string;
    userInfoClassName?: string;
    userNameClassName?: string;
    userSubtextClassName?: string;
  };
}
