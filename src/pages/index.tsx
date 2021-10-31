import { NextPage } from 'next';
import Image from 'next/image';
import { DefaultLayout } from '../layouts/defaultLayout';
import { Button } from '../components/Button';

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <p>Contents</p>
    </DefaultLayout>
  );
};

export default Index;
