const WIDGET_DEV_API = 'http://localhost:3001';
const WIDGET_PROD_API = 'https://widget.reviewmate.co.kr';

// let mode = 'dev';
let mode = 'prod'

export const WIDGET_API = mode === 'prod' ? WIDGET_PROD_API : WIDGET_DEV_API;