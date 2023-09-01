const WIDGET_DEV_API = 'http://localhost:3001';
const WIDGET_PROD_API = 'https://main.d33vkfpm9flfhs.amplifyapp.com';

let mode = 'dev';
// let mode = 'prod'

export const WIDGET_API = mode === 'prod' ? WIDGET_PROD_API : WIDGET_DEV_API;
