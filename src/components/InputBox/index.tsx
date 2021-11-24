import { useState } from 'react';

export const Text = () => {
  const [disable, setDisable] = useState(false);
  const [input, setInput] = useState('');
  return (
    <div>
      <div className="text-center ">
        <div>
          <textarea
            id="box"
            cols={50}
            rows={3}
            placeholder="エンジビアを入力する"
            maxLength={100}
            className="text-4xl resize-none outline-none"
            name="todo"
            value={input}
            disabled={disable}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></textarea>
        </div>

        <button
          onClick={() => setDisable(true)}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          保存する
        </button>
        <button
          onClick={() => setInput('')}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          クリア
        </button>
      </div>
    </div>
  );
};
