import React, { useCallback, useState } from 'react';
import { ClickButton } from 'components/ClickButton';
import { Text } from 'components/InputBox';

// const voteValue: string = document.getElementById('vote')!.value;

export const UserVotePage = (): JSX.Element => {
  // const [text, settext] = useState('');
  // const handleChange = useCallback(
  //   (e) => {
  //     settext(e.target.value.trim());
  //   },
  //   [settext]
  // );
  // console.log(settext);
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
        {/* <textarea
          name=""
          id="vote"
          cols="50"
          rows="3"
          placeholder="エンジビアを入力する"
          maxLength="100"
          className="text-4xl"
          value={text}
          onChange={handleChange}
        ></textarea> */}
      </div>
      <div>
        {/* <button onClick={handleChange}>保存</button> */}
        {/* <ClickButton text="保存する" /> */}
        {/* <ClickButton text="キャンセル" /> */}
      </div>
    </div>
  );
};
