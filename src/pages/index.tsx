import { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '../components/Button';

const Index: NextPage = () => {
  return (
    <>
      <h1 className="italic font-bold">Welcome!</h1>
      <p>Hello~</p>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </Button>
      <Image src="/images/sample.png" width={64} height={64} alt="sample" />
    </>
  );
};

export default Index;
