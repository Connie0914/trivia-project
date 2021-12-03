import React, { Component } from 'react';
import { Text } from 'components/InputBox';
export type Props = {};

export const UserVotePage = (props: any): JSX.Element => {
  return (
    <div>
      <div className="text-center">
        <ul className="p-12">
          <li className="p-8 text-yellow-800">
            <div className=" bg-yellow-100 inline py-2 px-4 rounded-2xl">
              放送前・エンジビア募集中
            </div>
          </li>
          <li className="text-4xl font-bold">第４回エンジビアの泉</li>
        </ul>
        <Text />
      </div>
      <div></div>
    </div>
  );
};
