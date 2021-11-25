import React, { useState } from 'react';
import { useDate } from 'hooks/useDate';

export type Props = {};

export const Text = (props: any) => {
  console.log('props', props);
  const { date, boolean, setDate, setBoolean } = useDate();
  const inputDate = () => {
    console.log('date', date);
    if (date !== '') {
      setBoolean((boolean) => {
        return false;
      });
    }
  };

  const editDate = () => {
    if (date !== '') {
      setBoolean((boolean) => {
        return true;
      });
    }
  };

  const deleteDate = () => {
    setDate((date) => {
      return '';
    });
    setBoolean((boolean) => {
      return true;
    });
  };

  return (
    <div>
      <div className="text-center ">
        <div>
          <textarea
            id="box"
            cols="50"
            rows="3"
            placeholder="エンジビアを入力する"
            maxLength="100"
            className="text-4xl resize-none outline-none"
            name="todo"
            value={date}
            disabled={!boolean}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      {boolean ? (
        <button
          onClick={inputDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          保存する
        </button>
      ) : null}

      {boolean ? null : (
        <button
          onClick={editDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          編集する
        </button>
      )}

      {boolean ? null : (
        <button
          onClick={deleteDate}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          削除する
        </button>
      )}

      {boolean ? (
        <button
          onClick={() => setDate('')}
          className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
        >
          キャンセル
        </button>
      ) : null}
    </div>
  );
};

// import { useState } from 'react';

// export const Text = () => {
//   const [disable, setDisable] = useState(false);
//   const [input, setInput] = useState('');
//   return (
//     <div>
//       <div className="text-center ">
//         <div>
//           <textarea
//             id="box"
//             cols={50}
//             rows={3}
//             placeholder="エンジビアを入力する"
//             maxLength={100}
//             className="text-4xl resize-none outline-none"
//             name="todo"
//             value={input}
//             disabled={disable}
//             onChange={(e) => {
//               setInput(e.target.value);
//             }}
//           ></textarea>
//         </div>

//         <button
//           onClick={() => setDisable(true)}
//           className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
//         >
//           保存する
//         </button>
//         <button
//           onClick={() => setInput('')}
//           className="bg-blue-400 text-white text-xl py-5 px-8 m-8 rounded-xl"
//         >
//           クリア
//         </button>
//       </div>
//     </div>
//   );
// };
