import { useState } from 'react';
import { DragEndEvent } from '@dnd-kit/core';

type Return = {
  parent: string | null;
  handleDragEnd: (event: DragEndEvent) => void;
};

export const useDragEnd = (): Return => {
  const [parent, setParent] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return { parent, handleDragEnd };
};
