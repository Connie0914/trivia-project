import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white text-black text-sm py-3 rounded mt-3 shadow"
    >
      {props.children}
    </li>
  );
}
