import React, { useState } from 'react';

export type Props = {};

export const Text = () => {
  const [date, setDate] = useState('');
  const inputDate = () => {
    console.log(date);
    if (date !== '') {
      // idの直接操作はアンチのため、改善点を探す必要がある
      const box = document.getElementById('box') as HTMLInputElement;
      box.disabled = true;
    }
  };
  return (
    <div>
      <div className="text-center ">
        <div>
          <textarea
            id="box"
            cols="50"
            rows="3"
            placeholder="エンジビアを入力する"
            maxLength="100"
            className="text-4xl resize-none outline-none"
            name="todo"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></textarea>
        </div>

        <button
          onClick={inputDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          保存する
        </button>
      </div>
    </div>
  );
};
