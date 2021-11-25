import { NextPage } from 'next';
import { AdminBroadCastList } from 'components/AdminBroadCastList';
import { DefaultLayout } from 'layouts/defaultLayout';

const adminBroadCastList: NextPage = () => {
  return (
    <DefaultLayout>
      <AdminBroadCastList />
    </DefaultLayout>
  );
};

export default adminBroadCastList;
