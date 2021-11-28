import { NextPage } from 'next';
import { DefaultLayout } from 'layouts/defaultLayout';
import { AdminABCComponent } from 'components/AdminABCComponent';

const AdminAfterBroadCast: NextPage = () => {
  return (
    <DefaultLayout>
      <AdminABCComponent />
    </DefaultLayout>
  );
};

export default AdminAfterBroadCast;
