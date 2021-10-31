import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};
