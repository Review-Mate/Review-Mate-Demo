import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { motion } from 'framer-motion';
import { codeStartExample } from '@/data/detail/guideCodeData';

export default function Insert() {
  return (
    <>
      <div className='absolute left-0 w-full text-heading font-bold bg-gray06 -mt-9 py-5 border-b-2 border-b-gray04'>
        <h1 className='px-[5%] xl:px-[15%]'>리뷰메이트 삽입 가이드</h1>
      </div>
      <h2 className='text-title font-bold mt-[130px] mb-5'>
        리뷰메이트 위젯 삽입 예제
      </h2>
      <h3 className='text-body2 mb-4'>
        간단한 예제를 통해 리뷰메이트 위젯 삽입 방법을 설명합니다.
      </h3>
      <div className='relative'>
        <CodeHighlight code={codeStartExample} />
        <CopyButton code={codeStartExample} />
      </div>
    </>
  );
}

interface CodeHighlightProps {
  code: string;
}

const CodeHighlight = ({ code }: CodeHighlightProps) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={githubGist}
      customStyle={{
        backgroundColor: '#f5f5f5',
        padding: '1.25rem',
        border: '#e8e8e8 1px solid',
        borderRadius: '10px',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

const CopyButton = ({ code }: CodeHighlightProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (code: string) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    navigator.clipboard.writeText(code);
  };

  return (
    <motion.button
      whileHover={{ opacity: 1 }}
      className='absolute top-3 right-3 opacity-60'
      whileTap={{ scale: 0.5 }}
    >
      {isCopied ? (
        <motion.img
          src='/images/check.svg'
          alt='복사완료'
          width={18}
          height={18}
          className='m-[8px]'
        />
      ) : (
        <motion.img
          onClick={() => copyToClipboard(code)}
          src='/images/copy.svg'
          alt='복사버튼'
          width={35}
          height={35}
        />
      )}
    </motion.button>
  );
};
