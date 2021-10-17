import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export const Button = ( props: Props ): JSX.Element => {
  const { children } = props;
  return (
    <button>{children}</button>
  );
  
};
