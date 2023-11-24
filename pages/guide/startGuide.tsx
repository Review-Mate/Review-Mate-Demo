import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { motion } from 'framer-motion';
import {
  codeStartExample,
  listWidgetCode,
  writeWidgetCode,
} from '@/data/detail/guideCodeData';
import { layoutWidth } from '@/components/Layout';

export default function Insert() {
  return (
    <div className='absolute top-[60px] pb-9 left-0 w-full'>
      <div className='w-full text-heading font-bold bg-gray06 py-5 border-b-2 border-b-gray04'>
        <h1 className={`${layoutWidth}`}>리뷰메이트 삽입 가이드</h1>
      </div>
      <div className={`${layoutWidth}`}>
        <h2 className='text-title font-bold mt-9 mb-5'>
          리뷰메이트 위젯 삽입 예제
        </h2>
        <h3 className='text-body2 mb-4'>
          간단한 예제를 통해 리뷰메이트 위젯 삽입 방법을 설명합니다.
          <br /> 아래의 HTML 코드를 복사하여 원하는 페이지에 붙여넣으면 리뷰
          목록 위젯이 삽입됩니다.
        </h3>
        <div className='relative mb-12'>
          <CodeHighlight code={codeStartExample} />
          <CopyButton code={codeStartExample} />
        </div>
        <h2 className='text-title font-bold mb-5'>
          리뷰메이트 위젯 삽입 코드 알아보기
        </h2>
        <h3 className='text-subTitle font-bold my-5'>리뷰 목록 위젯</h3>
        <CodeHighlight code={listWidgetCode} />
        <p className='text-body2 my-4 mb-8'>
          <strong>id</strong>는 리뷰메이트 위젯의 고유한 식별자입니다. 따라서{' '}
          <strong>reivew-mate-widget</strong> 으로 유지해야 합니다.
          <br />
          <strong>domain</strong>에는 위젯을 사용할 도메인 주소를 입력합니다.
          <br />
          <strong>product-id</strong>에는 리뷰를 제공할 상품의 아이디를
          입력합니다.
          <br />
          <strong>type</strong>은 목록 위젯을 뜻하는 <strong>list</strong>로
          유지합니다.
        </p>
        <h3 className='text-subTitle font-bold my-5'>리뷰 작성 위젯</h3>
        <CodeHighlight code={writeWidgetCode} />
        <p className='text-body2 my-4'>
          <strong>id</strong>는 리뷰메이트 위젯의 고유한 식별자입니다. 따라서{' '}
          <strong>reivew-mate-widget</strong> 으로 유지해야 합니다.
          <br />
          <strong>domain</strong>에는 위젯을 사용할 도메인 주소를 입력합니다.
          <br />
          <strong>reservation-id</strong>에는 리뷰를 작성할 상품의 예약 아이디를
          입력합니다.
          <br />
          <strong>type</strong>은 작성 위젯을 뜻하는 <strong>write</strong>로
          유지합니다.
        </p>
      </div>
    </div>
  );
}

interface CodeHighlightProps {
  code: string;
}

const CodeHighlight = ({ code }: CodeHighlightProps) => {
  return (
    <SyntaxHighlighter
      language='html'
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
