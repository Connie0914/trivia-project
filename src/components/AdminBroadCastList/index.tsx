import { BroadCastList } from 'components/BroadCastList';

export const AdminBroadCastList = (): JSX.Element => {
  return (
    <div>
      <BroadCastList />
      <div className="bg-blue-500 hover:bg-blue-700 text-white text-xl py-2 mt-36 rounded text-center w-44 mx-auto">
        <button>放送を作成する</button>
      </div>
    </div>
  );
};
