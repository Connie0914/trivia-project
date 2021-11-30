import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Label } from 'components/Label';

export const AdminAfterBroadCastComponent = () => {
  const [isShow, setIsShow] = useState(false);
  const [urlInput, setUrlInput] = useState('');

  const handleChange = useCallback((e) => {
    setUrlInput(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setIsShow(true);
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-center pt-10 pb-3">
        <Label type={'afterBroadcasting'} />
      </div>
      <h1 className="text-4xl font-bold pb-7 text-center">
        第4回エンジビアの泉
      </h1>
      {isShow && (
        <div>
          <iframe
            className="mb-10"
            width="675"
            height="380"
            src={`${urlInput.replace('/watch?v=', '/embed/')}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <form className="w-full max-w-2xl mb-6">
        <input
          type="url"
          placeholder="URLを入力"
          className="border-none w-full text-gray-700 py-2 px-3 bg-white rounded shadow"
          required
          onChange={handleChange}
        />
        <div className="text-center">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-5 mt-6 rounded"
            onClick={handleClick}
            disabled={!urlInput}
          >
            {isShow ? '編集する' : '保存する'}
          </button>
        </div>
      </form>
      <div className="bg-white mt-5 rounded shadow">
        <h2 className="text-center py-6 text-xl text-blue-600 font-bold">
          エンジビア1
        </h2>
        <p className="text-4xl px-7 pb-5">
          HTMLにはポータルという便利な要素がある
        </p>
        <div className="flex justify-between items-center">
          <div className="ml-7">👨‍💼 松平 ケン</div>
          <button className="rounded shadow bg-yellow-100 py-3 px-7 mb-7 mr-7 text-blue-500 text-3xl font-bold">
            85
            <span className="text-lg">へぇ</span>
          </button>
        </div>
      </div>
      <div className="bg-white mt-5 rounded shadow">
        <h2 className="text-center py-6 text-xl text-blue-600 font-bold">
          エンジビア2
        </h2>
        <p className="text-4xl px-7 pb-5">
          HTMLにはポータルという便利な要素がある
        </p>
        <div className="flex justify-between items-center">
          <div className="ml-7">👨‍💼 松平 ケン</div>
          <button className="rounded shadow bg-yellow-100 py-3 px-7 mb-7 mr-7 text-blue-500 text-3xl font-bold">
            70
            <span className="text-lg">へぇ</span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <Link href="/">
          <a>
            <button className="rounded shadow bg-gray-100 py-3 px-7 my-7 mr-7 text-black text-xl font-bold">
              一覧ページに戻る
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
