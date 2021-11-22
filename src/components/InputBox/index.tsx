import React, { useState } from 'react';
import { useDate } from 'hooks/useDate';

export type Props = {};

export const Text = (props: any) => {
  console.log('props', props);
  const { date, boolean, setDate, setBoolean } = useDate();
  const inputDate = () => {
    console.log('date', date);
    if (date !== '') {
      // idの直接操作はアンチのため、改善点を探す必要がある
      const box = document.getElementById('box') as HTMLInputElement;
      box.disabled = true;
      setBoolean((boolean) => {
        return false;
      });
    }
  };

  const editDate = () => {
    if (date !== '') {
      // idの直接操作はアンチのため、改善点を探す必要がある
      const box = document.getElementById('box') as HTMLInputElement;
      box.disabled = false;
      setBoolean((boolean) => {
        return true;
      });
    }
  };

  const deleteDate = () => {
    setDate((date) => {
      const box = document.getElementById('box') as HTMLInputElement;

      box.disabled = false;
      return '';
    });
    setBoolean((boolean) => {
      return true;
    });
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
            // キャンセルボタンの挙動　入力途中に押した場合、保存されていたものに戻すには？
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      {boolean ? (
        <button
          onClick={inputDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          保存する
        </button>
      ) : null}

      {boolean ? null : (
        <button
          onClick={editDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          編集する
        </button>
      )}

      {boolean ? null : (
        <button
          onClick={deleteDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          削除する
        </button>
      )}

      {boolean ? (
        <button
          onClick={inputDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          キャンセル
        </button>
      ) : null}
    </div>
  );
};
