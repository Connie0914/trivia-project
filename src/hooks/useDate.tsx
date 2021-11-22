import React, { useState } from 'react';

// inputboxに入力されたデータを他のページでも使えるようにする..どうやる？

export const useDate = () => {
  const [date, setDate] = useState('');
  const [boolean, setBoolean] = useState(true);

  return { date, boolean, setDate, setBoolean };
};
