import { WIDGET_URL } from './constant';

const WIDGET_DEV_API = 'http://localhost:3001';
const WIDGET_PROD_API = WIDGET_URL;

let mode = 'dev';
// let mode = 'prod';

export const WIDGET_API = mode === 'prod' ? WIDGET_PROD_API : WIDGET_DEV_API;
