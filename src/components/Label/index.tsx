export type Props = {
  type: 'broadcasting' | 'beforeBroadcasting' | 'afterBroadcasting';
};

export const Label = (props: Props): JSX.Element => {
  const { type } = props;

  if (type === 'beforeBroadcasting') {
    return (
      <div className="text-sm text-red-600 py-1 px-3 bg-yellow-100 rounded-2xl">
        <span>放送前・エンジビア募集</span>
      </div>
    );
  }
  if (type === 'broadcasting') {
    return (
      <div className="text-green-600 px-3 bg-green-200 rounded-2xl">
        <span>放送中</span>
      </div>
    );
  }
  if (type === 'afterBroadcasting') {
    return (
      <div className="text-sm py-1 px-3 bg-gray-200 rounded-2xl">
        <span>放送後</span>
      </div>
    );
  }
  return <div></div>;
};
