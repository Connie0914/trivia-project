import { ReactNode } from 'react';

export type Props = {
  className?: string;
  children: ReactNode;
};

export const Button = ( props: Props ): JSX.Element => {
  const { className, children } = props;
  return (
    <button className={className}>{children}</button>
  );
  
};
