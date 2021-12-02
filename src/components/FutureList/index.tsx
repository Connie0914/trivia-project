export type Props = {
  type: 'featuring' | 'afterFeaturing';
};

export const FutureListComponents = (props: any): JSX.Element => {
  const { type } = props;

  switch (type) {
    case 'afterFeaturing':
      return <li className="p-5"></li>;
    default:
      return (
        <li className="bg-gray-50 text-gray-500 text-center text-sm py-8 border-dashed border-2 mt-3">
          <div>フューチャーする</div>
        </li>
      );
  }
};
