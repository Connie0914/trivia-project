export type Props = {
  type: 'featuring' | 'afterFeaturing';
};

export const FutureListComponents = (props: Props): JSX.Element => {
  const { type } = props;

  switch (type) {
    case 'afterFeaturing':
      return <div className="p-5"></div>;
    default:
      return (
        <div className="bg-gray-50 text-gray-500 text-center text-sm py-8 border-dashed border-2 mt-3">
          <div>フューチャーする</div>
        </div>
      );
  }
};
