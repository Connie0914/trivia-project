import React from 'react';
import { ClickButton } from 'components/ClickButton';

type Props = {};

export const Text = () => {
  return (
    <div>
      <textarea
        name=""
        id="vote"
        cols="50"
        rows="3"
        placeholder="エンジビアを入力する"
        maxLength="100"
        className="text-4xl"
      ></textarea>
      <ClickButton text="保存する" />
    </div>
  );
};
