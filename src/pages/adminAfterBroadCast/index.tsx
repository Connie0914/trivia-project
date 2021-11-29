import { NextPage } from 'next';
import { DefaultLayout } from 'layouts/defaultLayout';
import { AdminAfterBroadCastComponent } from 'components/AdminAfterBroadCastComponent';

const AdminAfterBroadCast: NextPage = () => {
  return (
    <DefaultLayout>
      <AdminAfterBroadCastComponent />
    </DefaultLayout>
  );
};

export default AdminAfterBroadCast;
