import { ReactNode } from 'react';

export type Area = 'sm' | 'base' | 'lg' | 'xl';
export default interface IAvatar {
  image?: string;
  alt?: string;
  alternativeNode?: ReactNode;
  area?: Area;
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
