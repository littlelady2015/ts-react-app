import React, { useState, useEffect } from 'react';
import { message } from 'antd';
function Child(visible: { visible: any }) { 
  useEffect(() => {
    message.info('我只在页面挂载时打印');
    return () => {
      message.info('我只在页面卸载时打印');
    };
  }, []);
  return <>{visible ? 'true': 'false'}</>
}

export default function HooksDemo(){
  const [visible, changeVisible] = useState(true);
  return (
    <div>
      {
        visible && <Child visible={visible} />
      }
      <button onClick={() => { changeVisible(!visible); }}>
        改变visible
      </button>
    </div>
  );
}

interface tableProps {
  count: number;
}

function createRows(count: number) {
  console.log(`❗️createRows执行了 count = ${count}`);
  return count;
}
export function Table(props: tableProps) {
  // ⚠️ createRows() is called on every render
  const [rows, setRows] = useState(createRows(props.count));
}
export function TableOnce(props: tableProps) {
  // ⚠️ createRows() is called on the first render
  const [rows, setRows] = useState(() => createRows(props.count));
}

