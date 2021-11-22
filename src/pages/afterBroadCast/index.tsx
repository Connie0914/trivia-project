import { NextPage } from 'next';
import { AfterBroadCastList } from 'components/AfterBroadCast';
import { DefaultLayout } from 'layouts/defaultLayout';

const AfterBroadCast: NextPage = () => {
  return (
    <DefaultLayout>
      <AfterBroadCastList />
    </DefaultLayout>
  );
};

export default AfterBroadCast;
