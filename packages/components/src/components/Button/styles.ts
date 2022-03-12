import tw from "twin.macro";

export const base = {
  primary: {
    ...tw`focus:ring-primary-100`,
  },
  error: {
    ...tw`focus:ring-error-100`,
  },
};

export const primary = [
  {
    color: "primary",
    variant: "fill",
    css: {
      ...tw`bg-primary-600 hover:bg-primary-700 disabled:bg-primary-200`,
    },
  },
  {
    color: "primary",
    variant: "light",
    css: {
      ...tw`bg-primary-50 text-primary-700 hover:bg-primary-100 disabled:bg-primary-25 disabled:text-primary-300`,
    },
  },
  {
    color: "primary",
    variant: "outline",
    css: {
      ...tw`bg-white border border-primary-300 text-primary-700 hover:bg-primary-50 disabled:bg-white disabled:border-primary-200 disabled:text-primary-300`,
    },
  },
  {
    color: "primary",
    variant: "link",
    css: {
      ...tw`p-0 text-primary-700 hover:text-primary-800 disabled:text-gray-300`,
    },
  },
];

export const error = [
  {
    color: "error",
    variant: "fill",
    css: {
      ...tw`bg-error-600 hover:bg-error-700 disabled:bg-error-200`,
    },
  },
  {
    color: "error",
    variant: "light",
    css: {
      ...tw`bg-error-50 text-error-700 hover:bg-error-100 disabled:bg-error-25 disabled:text-error-300`,
    },
  },
  {
    color: "error",
    variant: "outline",
    css: {
      ...tw`bg-white border border-error-300 text-error-700 hover:bg-error-50 disabled:bg-white disabled:border-error-200 disabled:text-error-300`,
    },
  },
  {
    color: "error",
    variant: "link",
    css: {
      ...tw`p-0 text-error-700 hover:text-error-800 disabled:text-error-300`,
    },
  },
];
