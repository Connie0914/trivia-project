import { NextPage } from 'next';
import { AuthLayout } from '../layouts/AuthLayout';
import Image from 'next/image';

const Auth: NextPage = () => {
  return (
    <AuthLayout>
      <div className="grid h-screen grid-cols-10">
        <div className="col-span-4 flex flex-col justify-center items-center">
          <div className="text-5xl mb-2">⛲️</div>
          <h1 className="text-2xl mb-2">エンジビアの泉</h1>
          <p className="text-sm mb-7">〜素晴らしきエンジニアマメ知識〜</p>
          <button className="text-sm font-bold py-2 px-4 rounded border-solid border border-current">
            Slack認証
          </button>
        </div>
        <div className="col-span-6 relative">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Auth;
