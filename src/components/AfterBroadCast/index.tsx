import { Label } from 'components/Label';
import Link from 'next/link';

export const AfterBroadCastList = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex justify-center pt-10 pb-3">
        <Label type={'afterBroadcasting'} />
      </div>
      <h1 className="text-4xl font-bold pb-7 text-center">
        第4回エンジビアの泉
      </h1>
      <div className="bg-gray-400 py-52"></div>
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
