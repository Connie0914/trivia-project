import { Label } from '../Label';
import Link from 'next/link';
import { HiAcademicCap } from 'react-icons/hi';
import { HiCalendar } from 'react-icons/hi';

export const BroadCastList = (): JSX.Element => {
  return (
    <div className="w-2/4 mx-auto">
      {/* 見出し */}
      <h1 className="text-4xl font-bold py-10">放送一覧</h1>

      {/* 1つ目 */}
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第4回エンジビアの泉</span>
                  <Label
                    labelText={'放送前・エンジビア募集中'}
                    className="text-sm text-red-600 py-1 px-3 bg-yellow-100 rounded-2xl"
                  />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    {/* calender icon */}
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    {/* cap icon */}
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 8</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>

      {/* 2つ目 */}
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第3回エンジビアの泉</span>
                  <Label
                    labelText={'放送中'}
                    className="text-green-600 px-3 bg-green-200 rounded-2xl"
                  />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    {/* calender icon */}
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    {/* cap icon */}
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 5</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>

      {/* 3つ目 */}
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第2回エンジビアの泉</span>
                  <Label
                    labelText={'放送済み'}
                    className="text-sm py-1 px-3 bg-gray-200 rounded-2xl"
                  />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex items-center">
                    {/* calender icon */}
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    {/* cap icon */}
                    <HiAcademicCap className="text-xl mr-2" />
                    <span>エンジビア数 4</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>

      {/* 4つ目 */}
      <ul>
        <li>
          <Link href="/">
            <a>
              <div className="bg-white px-5 py-4">
                <div className="flex justify-between">
                  <span className="text-blue-400">第1回エンジビアの泉</span>
                  <Label
                    labelText={'放送済み'}
                    className="text-sm py-1 px-3 bg-gray-200 rounded-2xl"
                  />
                </div>
                <div className="flex justify-between pt-2 items-center text-gray-500">
                  <div className="flex justify-center items-center">
                    {/* calender icon */}
                    <HiCalendar className="text-xl mr-2" />
                    <span>2021年11月2日</span>
                  </div>
                  <div className="flex items-center">
                    {/* cap icon */}
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
