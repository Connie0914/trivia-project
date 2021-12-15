import Link from 'next/link';
import { DndContext } from '@dnd-kit/core';
import { Label } from 'components/Label';
import { Droppable } from 'components/Droppable';
import { FutureListComponents } from 'components/FutureList';
import { DraggableMarkup } from 'components/DraggableMarkup';
import { useDragEnd } from 'hooks/useHandleDragEnd';

export const AdminBroadCasting = (): JSX.Element => {
  const containers = ['A'];
  const wraps = ['B'];
  const { parent, handleDragEnd } = useDragEnd();

  return (
    <div className="items-center w-3/4 mx-auto">
      <div className="pt-12 pb-16">
        <div className="flex justify-center mb-6">
          <Label type={'broadcasting'} />
        </div>
        <div className="text-right mx-auto">
          <Link href="/adminAfterBroadCast">
            <a>
              <span className="bg-blue-100 hover:bg-blue-200 text-blue-500 text-base py-4 px-8 rounded">
                放送を終了する
              </span>
            </a>
          </Link>
        </div>
        <h1 className="text-center text-4xl font-bold">第4回 エンジビアの泉</h1>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between">
          <div>
            <div className="bg-gray-300 text-black text-sm py-3 px-36 rounded font-bold">
              フューチャー前
            </div>
            <ul>
              <Droppable id="aaa">
                {parent === null ? DraggableMarkup : null}
              </Droppable>
            </ul>
          </div>
          <div>
            <div className="bg-gray-300 text-black text-sm py-3 px-32 rounded font-bold">
              フューチャー中
            </div>
            <ul>
              {containers.map((id) => (
                <Droppable key={id} id={id}>
                  {parent === id ? (
                    DraggableMarkup
                  ) : (
                    <FutureListComponents type={'featuring'} />
                  )}
                </Droppable>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-gray-300 text-black text-sm py-3 px-32 rounded font-bold">
              フューチャー後
            </div>
            <ul>
              {wraps.map((id) => (
                <Droppable key={id} id={id}>
                  {parent === id ? (
                    DraggableMarkup
                  ) : (
                    <FutureListComponents type={'afterFeaturing'} />
                  )}
                </Droppable>
              ))}
            </ul>
          </div>
        </div>
      </DndContext>
    </div>
  );
};
