import { useEffect, useState, ChangeEvent, useCallback } from 'react';

type Return = {
  input: string;
  setInput: (input: string) => void;
};

export const useInput = (): Return => {
  const [input, setInput] = useState('');

  return {
    input,
    setInput,
  };
};
