import React, { useState, useMemo } from 'react';
import { Alert } from 'antd';
export default function HookDemo() {
  const [count1, changeCount1] =  useState(0);
  const [count2, changeCount2] =  useState(10);
  const calculateCount = useMemo(() => {
    // 参数为count1 只有count1发生变化才重新计算
    return count2 + count1;
  },[count1, count2])
  return (
    <>
      {calculateCount}
      <button onClick={() => { changeCount1(count1 + 1); }}>改变count1</button>
      <button onClick={() => { changeCount2(count2 + 1); }}>改变count2</button>
    </>
  )
}
