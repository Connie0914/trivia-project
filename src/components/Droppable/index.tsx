import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  return <li ref={setNodeRef}>{props.children}</li>;
}
