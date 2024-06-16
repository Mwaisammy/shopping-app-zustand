"use client";
import { useCounterStore } from "@/store/counter-store";
import React from "react";

function Counter() {
  const { count, decrement, increment } = useCounterStore();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <p>Count: {count}</p>
      <button onClick={increment} className="bg-green-300 p-2 rounded-md">
        Increment
      </button>
      <button onClick={decrement} className="bg-rose-300 p-2 rounded-md">
        Decrement
      </button>
    </div>
  );
}

export default Counter;
