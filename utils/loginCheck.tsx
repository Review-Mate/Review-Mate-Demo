import Router from 'next/router';

export const loginCheck = () => {
  const token = localStorage.getItem('loginToken');
  if (!token) {
    Router.push('/demo/login');
  }
};
