import { NextPage } from 'next';
import Image from 'next/image';
import { DefaultLayout } from '../layouts/defaultLayout';
import { Button } from '../components/Button';
import { BroadCastList } from '../components/BroadCastList';

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <BroadCastList />
    </DefaultLayout>
  );
};

export default Index;
