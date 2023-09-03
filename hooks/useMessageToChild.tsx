import React, { useEffect, useRef, useState } from 'react';

export default function useMessageToChild(): {
  iframeRef: React.RefObject<HTMLIFrameElement>;
} {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const listener = (e: MessageEvent) => {
      if (!e.data.type) return;
      if (e.data.type === 'height') {
        console.log('자식으로 부터 온 height', e.data.message);
        iframe.style.height = `${e.data.message}px`;
      }
    };

    window.addEventListener('message', listener);

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow?.postMessage(
        { type: 'loaded', message: 'on loaded!' },
        '*'
      );
    }

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  return { iframeRef };
}
