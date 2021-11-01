import { Label } from '../Label';

export const BroadCastList = (): JSX.Element => {
  return (
    <ul>
      <li>
        <a href="/">
          <div>
            <span>第4回エンジビアの泉</span>
            <Label />
          </div>
          <div>
            <span>2021年11月2日</span>
            <span>エンジビア数 8</span>
          </div>
        </a>
      </li>
      <li>hoge2</li>
    </ul>
  );
};
