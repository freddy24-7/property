export { default } from 'next-auth/middleware';

//urls to protect are given in the config object
export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
