import { Label } from '../Label';
import Link from 'next/link';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';

export const BroadCastList = (): JSX.Element => {
  return (
    <div className="w-2/4 mx-auto">
      <h1 className="text-4xl font-bold py-10">放送一覧</h1>
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第4回エンジビアの泉</span>
                  <Label type={'beforeBroadcasting'} />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 8</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第3回エンジビアの泉</span>
                  <Label type={'broadcasting'} />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 5</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第2回エンジビアの泉</span>
                  <Label type={'afterBroadcasting'} />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex items-center">
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 4</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第1回エンジビアの泉</span>
                  <Label type={'afterBroadcasting'} />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 10</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
