export type Props = {};

export const Header = (props: Props): JSX.Element => {
  return (
    <header className="flex px-6 py-3 shadow">
      <div className="flex flex-1">
        <span className="mr-3">⛲️</span>
        <h1>エンジビアの泉</h1>
      </div>
      <span>👨‍💼</span>
    </header>
  );
};
