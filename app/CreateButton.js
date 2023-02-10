'use client';

//Button for the shopping car

import { useState } from 'react';

export default function CreateButton() {
  const [count, setCount] = useState(0);
  if (count === -1) {
    setCount(0);
  }

  return (
    <>
      <button onClick={() => setCount(count - 1)}> -1</button>
      {count}
      <button onClick={() => setCount(count + 1)}> +1</button>
    </>
  );
}
