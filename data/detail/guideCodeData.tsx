export const codeStartExample = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리뷰메이트 위젯 테스트하기</title>
  </head>
  <body>
    <div>상품 페이지 입니다</div>

    <!--리뷰 메이트 위젯 -->
    <div
      id="review-mate-widget"
      domain="goodchoice.kr"
      product-id="PRODUCT-0001"
      type="list"
    />

    <!--리뷰 메이트 위젯 스크립트 -->
    <script
      type="text/javascript"
      src="https://widget.reviewmate.co.kr/script/widgetScript.js"
    ></script>
    
  </body>
</html>`;

export const listWidgetCode = `<div
  id="review-mate-widget"
  domain="goodchoice.kr"
  product-id="PRODUCT-0001"
  type="list"
/>
`;
export const writeWidgetCode = `<div
  id="review-mate-widget"
  domain="goodchoice.kr"
  reservation-id="1"
  type="write"
/>
`;
