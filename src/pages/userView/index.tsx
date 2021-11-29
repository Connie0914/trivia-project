import { NextPage } from 'next';
import { Text } from 'components/InputBox';
import { DefaultLayout } from 'layouts/defaultLayout';
import React from 'react';
import { UserVotePage } from 'components/UserVotePage';
const AfterBroadCast: NextPage = () => {
  return (
    <DefaultLayout>
      <UserVotePage />
    </DefaultLayout>
  );
};

export default AfterBroadCast;
