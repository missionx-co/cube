import tw from 'twin.macro';

export const base = {
  primary: {
    ...tw`focus:ring-primary-300`,
  },
  error: {
    ...tw`focus:ring-error-300`,
  },
  success: {
    ...tw`focus:ring-success-300`,
  },
};

export const primary = [
  {
    color: 'primary',
    variant: 'fill',
    css: {
      ...tw`bg-primary-600 border-primary-600 hover:bg-primary-700 hover:border-primary-700 disabled:bg-primary-200 disabled:border-primary-200`,
    },
  },
  {
    color: 'primary',
    variant: 'light',
    css: {
      ...tw`bg-primary-50 border-primary-50 text-primary-700 hover:border-primary-100 hover:bg-primary-100 disabled:bg-primary-25 disabled:text-primary-300 disabled:border-primary-25`,
    },
  },
  {
    color: 'primary',
    variant: 'outline',
    css: {
      ...tw`border-primary-300 text-primary-700 hover:bg-primary-50 disabled:bg-white disabled:border-primary-200 disabled:text-primary-300 bg-white border`,
    },
  },
  {
    color: 'primary',
    variant: 'link',
    css: {
      ...tw`text-primary-700 hover:text-primary-800 disabled:text-gray-300 p-0 border-0`,
    },
  },
];

export const error = [
  {
    color: 'error',
    variant: 'fill',
    css: {
      ...tw`bg-error-600 border-error-600 hover:bg-error-700 hover:border-error-700 disabled:bg-error-200 disabled:border-error-200`,
    },
  },
  {
    color: 'error',
    variant: 'light',
    css: {
      ...tw`bg-error-50 border-error-50 text-error-700 hover:bg-error-100 hover:border-error-100 disabled:bg-error-25 disabled:border-error-25 disabled:text-error-300`,
    },
  },
  {
    color: 'error',
    variant: 'outline',
    css: {
      ...tw`border-error-300 text-error-700 hover:bg-error-50 disabled:bg-white disabled:border-error-200 disabled:text-error-300 font-normal bg-white border`,
    },
  },
  {
    color: 'error',
    variant: 'link',
    css: {
      ...tw`text-error-700 hover:text-error-800 disabled:text-error-300 p-0 border-0`,
    },
  },
];

export const success = [
  {
    color: 'success',
    variant: 'fill',
    css: {
      ...tw`bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600 disabled:bg-success-200 disabled:border-success-200`,
    },
  },
  {
    color: 'success',
    variant: 'light',
    css: {
      ...tw`bg-success-50 border-success-50 text-success-600 hover:bg-success-100 hover:border-success-100 disabled:bg-success-25 disabled:border-success-25 disabled:text-success-300`,
    },
  },
  {
    color: 'success',
    variant: 'outline',
    css: {
      ...tw`border-success-300 text-success-600 hover:bg-success-50 disabled:bg-white disabled:border-success-200 disabled:text-success-300 font-normal bg-white border`,
    },
  },
  {
    color: 'success',
    variant: 'link',
    css: {
      ...tw`text-success-600 hover:text-success-800 disabled:text-success-300 p-0 border-0`,
    },
  },
];
