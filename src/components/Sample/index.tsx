import Image from 'next/image';

export type Props = {};

export const Sample = ( props: Props ): JSX.Element => {
  return (
    <Image
      src="/images/sample.png"
      width="64"
      height="64"
      alt="sample"
    />
  );
  
};
