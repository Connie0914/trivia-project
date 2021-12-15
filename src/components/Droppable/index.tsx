import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

type Props = {
  id: string;
  children?: ReactNode;
};

export function Droppable({ id, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return <li ref={setNodeRef}>{children}</li>;
}
