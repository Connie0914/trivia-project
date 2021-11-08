import React, { useCallback, useState } from 'react';

type Props = {
  text: string;
};

export const ClickButton = (props: Props) => {
  const [text, setText] = useState('');
  const handleClick = useCallback(() => {
    const voteValue = (document.getElementById('vote') as HTMLInputElement)!
      .value;
    (document.getElementById('vote') as HTMLInputElement)!.value = voteValue;
    (document.getElementById('vote') as HTMLInputElement)!.disabled = true;

    // if (text !== '') {
    //   (document.getElementById('vote') as HTMLInputElement)!.value = text;
    //   (document.getElementById('vote') as HTMLInputElement)!.disabled = true;
    // }
    // const voteValue = (document.getElementById('vote') as HTMLInputElement)!
    //   .value;
    // if (text === '') {
    //   setText((text) => voteValue);
    // }
    // console.log('vote', voteValue);
    // console.log('text', text);
    // console.log('set', setText);
  }, []);
  return (
    <div>
      <div className="text-center ">
        <button
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
          onClick={handleClick}
        >
          {props.text}
        </button>
      </div>
    </div>
  );
};
