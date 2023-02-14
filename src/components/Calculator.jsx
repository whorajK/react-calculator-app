import React, { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(0);

  const inputNum = (e) => {
    let input = e.target.value;

    num === 0 ? setNum(input) : setNum(num + input);
  };

  const handleOperator = (e) => {
    let input = e.target.value;
    setNum(num + input);
  };

  const deleteNum = () => {
    let input = num.substring(0, num.length - 1);

    setNum(input);
  };

  const evalutate = () => {
    let x = eval(num);

    num === 0 ? alert("Enter something to calculate!") : setNum(x);
  };

  const clearAll = () => {
    setNum(0);
  };

  return (
    <article className="min-w-[290px] w-[600px] bg-gray-800 rounded-xl p-4">
      <div className="w-full h-[70px]">
        <div className="w-full h-full bg-slate-700 text-slate-300 text-3xl flex items-center justify-end px-2 overflow-hidden">
          {num}
        </div>
      </div>
      <div className="w-full text-slate-300 py-2 flex gap-2">
        <button
          className="border-none outline-none bg-blue-500 py-2 px-4 text-2xl cursor-pointer flex-1 font-bold hover:opacity-80"
          onClick={clearAll}
        >
          AC
        </button>
        <button
          className="border-none outline-none bg-red-500 py-2 px-4 text-2xl cursor-pointer flex-1 font-bold hover:opacity-80"
          onClick={deleteNum}
        >
          Clear
        </button>
      </div>
      <div className="w-full h-full grid grid-cols-4 gap-1">
        <button className="btn hover:opacity-80" value={7} onClick={inputNum}>
          7
        </button>
        <button className="btn hover:opacity-80" value={8} onClick={inputNum}>
          8
        </button>
        <button className="btn hover:opacity-80" value={9} onClick={inputNum}>
          9
        </button>

        <button
          className="btn !bg-slate-600 /hover:opacity-80"
          value={"/"}
          onClick={handleOperator}
        >
          ÷
        </button>

        <button className="btn hover:opacity-80" value={4} onClick={inputNum}>
          4
        </button>
        <button className="btn hover:opacity-80" value={5} onClick={inputNum}>
          5
        </button>
        <button className="btn hover:opacity-80" value={6} onClick={inputNum}>
          6
        </button>

        <button
          className="btn !bg-slate-600 hover:opacity-80"
          value={"*"}
          onClick={handleOperator}
        >
          x
        </button>

        <button className="btn hover:opacity-80" value={1} onClick={inputNum}>
          1
        </button>
        <button className="btn hover:opacity-80" value={2} onClick={inputNum}>
          2
        </button>
        <button className="btn hover:opacity-80" value={3} onClick={inputNum}>
          3
        </button>

        <button
          className="btn !bg-slate-600 hover:opacity-80"
          value={"-"}
          onClick={handleOperator}
        >
          -
        </button>

        <button className="btn hover:opacity-80" value={0} onClick={inputNum}>
          0
        </button>
        <button className="btn hover:opacity-80" value={"."} onClick={inputNum}>
          .
        </button>

        <button
          className="btn !bg-slate-600 hover:opacity-80"
          onClick={evalutate}
        >
          =
        </button>

        <button
          className="btn !bg-slate-600 hover:opacity-80"
          value={"+"}
          onClick={handleOperator}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default Calculator;
