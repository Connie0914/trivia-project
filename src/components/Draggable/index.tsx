import { useDraggable } from '@dnd-kit/core';
import { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

export function Draggable({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white text-black text-sm py-3 rounded mt-3 shadow"
    >
      {children}
    </div>
  );
}
