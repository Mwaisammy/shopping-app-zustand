"use client";
import { useCountStore } from "@/store/counter-store";
import React from "react";

function Counter() {
  //   const { count, decrement, increment } = useCounterStore();
  const { nested, inc, dec } = useCountStore();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <p>Count: {nested.count}</p>
      <button onClick={inc} className="bg-green-300 p-2 rounded-md">
        Increment
      </button>
      <button onClick={dec} className="bg-rose-300 p-2 rounded-md">
        Decrement
      </button>
    </div>
  );
}

export default Counter;
