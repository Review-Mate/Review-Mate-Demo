import React, { useEffect, useState } from 'react';

export default function useChildMessage(): {
  message: string;
} {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (!e.data.type) return;
      if (e.data.type === 'success') {
        setMessage(e.data.message);
      }
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  return { message };
}
