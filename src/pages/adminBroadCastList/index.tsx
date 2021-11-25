import { NextPage } from 'next';
import { AdminBroadCastList } from 'components/AdminBroadCastList';
import { DefaultLayout } from 'layouts/defaultLayout';

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <AdminBroadCastList />
    </DefaultLayout>
  );
};

export default Index;
