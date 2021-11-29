import React, { useState } from 'react';

// inputboxに入力されたデータを他のページでも使えるようにする..どうやる？

export const useData = () => {
  const [date, setData] = useState('');
  const [boolean, setBoolean] = useState(true);

  return { date, boolean, setData, setBoolean };
};
