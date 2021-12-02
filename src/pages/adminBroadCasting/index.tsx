import { NextPage } from 'next';
import { AdminBroadCasting } from 'components/AdminBroadCasting';
import { DefaultLayout } from 'layouts/defaultLayout';

const adminBroadCasting: NextPage = () => {
  return (
    <DefaultLayout>
      <AdminBroadCasting />
    </DefaultLayout>
  );
};

export default adminBroadCasting;
