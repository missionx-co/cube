import { ReactNode } from 'react';

export default interface IDataTableColumn {
  key: string;
  text: string;
  render?: (dataRow: any) => ReactNode;
  sort?: (comapre1: any, comapre2: any) => -1 | 0 | 1;
}
